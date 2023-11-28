import { ILoadPageChunkBlock } from "./getBlogIndex";
import rpc, { values } from "./rpc";
import Slugger from 'github-slugger';
import { createAgent } from 'notionapi-agent';
import { Block } from "notionapi-agent/dist/interfaces";
import { LoadPageChunk } from 'notionapi-agent/dist/interfaces/notion-api/v3/loadPageChunk';
import { QueryCollection } from "notionapi-agent/dist/interfaces/notion-api/v3/queryCollection";
import { BlockRecord } from 'notionapi-agent/dist/interfaces/notion-api/v3/Record';

const queryCollection = ({ collectionId, collectionViewId, loader = {}, query = {} }: any) => {
  const queryCollectionBody = {
    loader: {
      type: 'reducer',
      reducers: {
        collection_group_results: {
          type: 'results',
          limit: 999, 
          loadContentCover: true,
        },
        'table:uncategorized:title:count': {
          type: 'aggregation',
          aggregation: {
            property: 'title',
            aggregator: 'count',
          },
        },
      },
      searchQuery: '',
      userTimeZone: 'America/Sao_Paulo',
    },
  };

  return rpc('queryCollection', {
    collectionId,
    collectionViewId,
    ...queryCollectionBody,
  });
}

const normalizeSlug = (slug: string):string => {
  let startingSlash = slug.startsWith('/');
  let endingSlash = slug.endsWith('/');

  if (startingSlash) slug = slug.slice(1);
  if (endingSlash) slug = slug.slice(0, -1);

  return startingSlash || endingSlash ? normalizeSlug(slug) : slug;
}

export const loadTable = async (blockRecord: BlockRecord, isPosts:boolean = false) => {
  if (typeof blockRecord.value === "undefined") throw new Error("Block is undefined in loadTable");

  const agent = createAgent({
    token: process.env.NOTION_TOKEN,
  });

  const block: Block = blockRecord.value;
  const anyBlock: any = blockRecord.value;
  const view_ids = anyBlock.view_ids;

  const req: QueryCollection.Request = {
    collection: {
      id: block.id,
    },
    collectionView: {
      id: view_ids[0],
    },
    loader: {
      type: 'reducer',
      reducers: {
        collection_group_results: {
          type: 'results',
          limit: 999, 
          loadContentCover: true,
        },
        'table:uncategorized:title:count': {
          type: 'aggregation',
          aggregation: {
            property: 'title',
            aggregator: 'count',
          },
        },
      },
      searchQuery: '',
      userTimeZone: 'America/Sao_Paulo',
    },
  };

  const res: QueryCollection.Response = await agent.queryCollection(req);
  /*
  agent.queryCollection
  const slugger = new Slugger();
  const value = blockRecord.value;
  let table: any = {};
  const col: any = await queryCollection({
    collectionId: value.id,
    collectionViewId: value.view_ids[0],
  });
  const entries = values(col.recordMap.block)
    .filter(block => { return block.value && block.value.parent_id === value.collection_id });
  
  const colId = Object.keys(col.recordMap.collection)[0];
  const schema = col.recordMap.collection[colId].value.schema;
  const schemaKeys = Object.keys(schema);

  for (const entry of entries) {
    const props = entry.value && entry.value.properties;
    const row: any = {};

    if (!props) continue;
    if (entry.value.Content) row.id = entry.value.id;

    for (const key of schemaKeys) {
      let val = props[key] && props[key][0][0];

      if (val && props[key][0][1]) {
        const type = props[key][0][1][0];
        
        switch (type[0]) {
          case 'a': // link
            val = type[1];
            break;
          case 'u': // user
            val = props[key].filter((arr: any[]) => arr.length > 1)
              .map((arr: any[]) => arr[1][0][1]);
            break;
          case 'p': // page
            const page = col.recordMap.block[type[1]];
            row.id = page.value.id;
            val = page.value.properties.title[0][0];
            break;
          case 'd': // date
            if (!type[1].start_date) break;

            const providedDate = new Date(type[1].start_date).getTime();
            const timezoneOffset = new Date(
              new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }))
              .getTime() - new Date().getTime();
            
            val = new Date(providedDate - timezoneOffset).getTime();
            break;
          default:
            console.error('Unknown type', type[0], type);
            break;
        }
      }

      if (typeof val === 'string') val = val.trim();
      row[schema[key].name] = val || null;
    }

    row.Slug = normalizeSlug(row.slug || slugger.slug(row.Page || ''));

    const key = row.Slug;

    if (isPosts && !key) continue;

    if (key) table[key] = row;
    else {
      if (!Array.isArray(table)) table = [];
      table.push(row);
    }
  }

  return table;*/
}
