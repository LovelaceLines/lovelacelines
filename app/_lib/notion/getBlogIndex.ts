import { Sema } from 'async-sema';
import { rpc, values } from './rpc';
import { loadTable } from './getTableData';
import { getPostPreview } from './getPostPreview';
import fs from 'fs';
import { createAgent } from 'notionapi-agent';
import { LoadPageChunk } from 'notionapi-agent/dist/interfaces/notion-api/v3/loadPageChunk';
import { BlockRecord } from 'notionapi-agent/dist/interfaces/notion-api/v3/Record';

export interface ILoadPageChunkBlock {
  value: {
    id: string;
    version?: number;
    type: string;
    properties: {
      title: string[][];
    };
    content: string[];
    permissions?: any[];
    view_ids: string[];
    collection_id?: string;
    format?: {
      block_icon: string;
      page_cover: string;
      page_cover_position: number;
    } | {
      collection_pointer: {
        id: string;
        table: string;
        space_id: string;
      }
    };
    created_time?: number;
    last_edited_time?: number;
    parent_id?: string;
    parent_table?: string;
    alive?: boolean;
    file_ids?: string[];
    created_by_table?: string;
    created_by_id?: string;
    last_edited_by_table?: string;
    last_edited_by_id?: string;
    space_id?: string;
  };
  role: string;
}

/**
 * Consume a API do Notion para obter os dados da tabela de posts (tabela Blog).
 */
export const getBlogIndex = async (previews: boolean = true) => {
  const { BLOG_INDEX_ID, BLOG_INDEX_CACHE, USE_CACHE } = process.env;
  if (!BLOG_INDEX_ID || !BLOG_INDEX_CACHE || !USE_CACHE) throw new Error('Missing env variables for Notion Blog Index');

  let postsTable: any;
  const cacheFile = `.${BLOG_INDEX_CACHE}${previews ? '_previews' : ''}`;

  if (USE_CACHE === 'true') {
    try {
      postsTable = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    } catch (_) {}
  }

  if (!postsTable) {
    try {
      const req: LoadPageChunk.Request = {
        pageId: BLOG_INDEX_ID,
        limit: 100,
        chunkNumber: 0,
        cursor: { stack: [] },
        verticalColumns: false,
      }
    
      const agent = createAgent({
        token: process.env.NOTION_TOKEN,
      });

      const data: LoadPageChunk.Response = await agent.loadPageChunk(req);

      let blockRecord: BlockRecord = values(data.recordMap.block)
        .find((blockRecord: BlockRecord) => blockRecord.value!.type === 'collection_view');
      
      postsTable = await loadTable(blockRecord, true);
    } catch (err) {
      console.warn(`Failed to load Notion posts table`);
      if (process.env.NODE_ENV === 'development') console.error(err);
      return {};
    }

    const postsKeys = Object.keys(postsTable).splice(0, 10);

    const sema = new Sema(3, { capacity: postsKeys.length });

    if (previews) {
      await Promise.all(postsKeys
        .sort((a, b) => {
          const aDate = postsTable[a].Date;
          const bDate = postsTable[b].Date;
          return bDate - aDate;
        })
        .map(async (postsKey) => {
          await sema.acquire();
          const post = postsTable[postsKey];
          post.preview = post.id ? await getPostPreview(postsTable[postsKey].id) : [];
        })
      );
    }

    if (USE_CACHE === 'true') {
      try {
        fs.writeFileSync(cacheFile, JSON.stringify(postsTable));
      } catch (_) {}
    }
  }
}