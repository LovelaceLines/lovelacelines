import { loadPageChunk } from "./getPageData";
import { values } from "./rpc";

const nonPreviewTypes = new Set(['editor', 'page', 'collection_view']);

export const getPostPreview = async (pageId: string) => {
  let blocks;
  let dividerIndex = 0;

  const data:any = await loadPageChunk(pageId, 10);
  blocks = values(data.recordMap.block);

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (block.value.type === 'divider') {
      dividerIndex = i;
      break;
    }
  }

  // remove blocks after divider
  blocks = blocks.slice(0, dividerIndex)
    .filter(({ value: { type, properties } }) => !nonPreviewTypes.has(type) && properties)
    .map(block => block.value.properties.title);
  
  return blocks;
}