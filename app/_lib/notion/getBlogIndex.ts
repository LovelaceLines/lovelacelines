import { Sema } from 'async-sema';
import { rpc, values } from './rpc';
import { loadTable } from './getTableData';
import { getPostPreview } from './getPostPreview';
import fs from 'fs';

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
    view_ids?: string[];
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


export interface ILoadPageChunkResponse {
  cursor: { stack: any[] };
  recordMap: {
    block: {
      [key: string]: ILoadPageChunkBlock;
    };
    space: {
      [key: string]: {
        value: {
          id: string;
          version: number;
          name: string;
          permissions: {
            role: string;
            type: string;
            user_id: string;
          }[];
          icon: string;
          beta_enabled: boolean;
          created_time: number;
          last_edited_time: number;
          created_by_table: string;
          created_by_id: string;
          last_edited_by_table: string;
          last_edited_by_id: string;
          plan_type: string;
          invite_link_enabled: boolean;
          settings: {
            is_teams_enabled: boolean;
            enable_ai_feature: boolean;
            space_survey_data: {
              intent: {
                value: string;
                version: number;
                collected_at: number;
                collected_from: string;
              };
              use_cases: {
                value: string[];
                version: number;
                collected_at: number;
                collected_from: string;
              };
              company_size: {
                value: string;
                version: number;
                collected_at: number;
                collected_from: string;
              };
            };
            disable_ai_feature: boolean;
            first_invited_member_time: number;
            seen_guest_membership_requests: boolean;
          };
          subscription_tier: string;
        };
        role: string;
      }
    };
    collection_view: {
      [key: string]: {
        value: {
          id: string;
          version: number;
          type: string;
          format: {
            table_wrap: boolean;
            table_properties: {
              visible: boolean;
              property: string;
              width: number;
            }[];
            collection_pointer: {
              id: string;
              table: string;
              spaceId: string;
            };
            table_frozen_column_index: number;
          };
          parent_id: string;
          parent_table: string;
          alive: boolean;
          page_sort: string[];
          space_id: string;
        };
        role: string;
      };
    };
    collection: {
      [key: string]: {
        value: {
          id: string;
          version: number;
          name: string[][];
          schema: {
            [key: string]: {
              name: string;
              type: string;
              options?: {
                id: string;
                color: string;
                value: string;
              }[];
            };
          };
          format: {
            collection_page_properties: {
              visible: boolean;
              property: string;
            }[];
          };
          parent_id: string;
          parent_table: string;
          alive: boolean;
          migrated: boolean;
          space_id: string;
          deleted_schema: {
            [key: string]: {
              name: string;
              type: string;
            };
          };
        };
        role: string;
      };
    };
  };
}

export const getBlogIndex = async (previews: boolean = true) => {
  const { BLOG_INDEX_ID, BLOG_INDEX_CACHE, USE_CACHE } = process.env;
  let postsTable: any;
  const cacheFile = `${BLOG_INDEX_CACHE}${previews ? '_previews' : ''}`;

  if (USE_CACHE === 'true') {
    try {
      postsTable = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    } catch (_) {}
  }

  if (!postsTable) {
    try {
      const data = await rpc<ILoadPageChunkResponse>('loadPageChunk', {
        pageId: BLOG_INDEX_ID,
        limit: 100,
        cursor: { stack: [] },
        chunkNumber: 0,
        verticalColumns: false,
      });

      const block = values(data.recordMap.block)
        .find((block: ILoadPageChunkBlock) => block.value.type === 'collection_view');
      
      postsTable = await loadTable(block, true);
    } catch (err) {
      console.warn(`Failed to load Notion posts table`);
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