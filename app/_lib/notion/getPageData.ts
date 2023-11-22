import { rpc, values } from './rpc'

export const getPageData = async (pageId: string): Promise<any> => {
  const maxChunkSize = 100;
  var chunk = 0;
  var data: any = await rpc("loadPageChunk", { pageId, chunk });
  var blocks = data.recordMap.block;

  try {

    while (data.cursor.stack.length > 0 && chunk < maxChunkSize) {
      chunk++;

      data = await rpc("loadPageChunk", { pageId, chunk, cursor: data.cursor });
      blocks = Object.assign(blocks, data.recordMap.block);
    }

    const collectionBlock = values(blocks);

    if (collectionBlock[0] && collectionBlock[0].value && collectionBlock[0].value.Content) {
      // remove table blocks
      collectionBlock.splice(0, 3);
    }

    return collectionBlock;
  } catch (error) {
    console.error(`Failed to fetch Notion page data for ${pageId}`, error);
    return [];
  }
};

export const loadPageChunk = async (pageId: string, limit:number = 30, cursor = { stack: [] }, chunkNumber:number = 0, verticalColumns:boolean = false) => {
  const data = await rpc("loadPageChunk", {
      pageId,
      limit,
      cursor,
      chunkNumber,
      verticalColumns,
  });

  return data;
}