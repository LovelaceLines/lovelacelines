import { getBlogIndex } from "@/_lib/notion/getBlogIndex"

export const GET = async () => {
  await getBlogIndex();
}