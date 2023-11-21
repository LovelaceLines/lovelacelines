import fetch, { Response } from 'node-fetch';

export const rpc = async (fnName: string, body: any) => {
  const { NOTION_TOKEN, NOTION_API_ENDPOINT } = process.env;

  if (NOTION_TOKEN || NOTION_API_ENDPOINT) 
    throw new Error('Missing NOTION_TOKEN or NOTION_API_ENDPOINT env variables.')

  const url = `${NOTION_API_ENDPOINT}/${fnName}`;
  const headers = {
    'Content-Type': 'application/json',
    cookie: `token_v2=${NOTION_TOKEN}`,
  };

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  });
  
  if (res.ok) return await res.json();
  
  throw new Error(await getError(res));
}

export default rpc;

export const getError = async (res: Response) => 
  `Notion API error (${res.status}):
    \n${getJSONHeaders(res)}
    \n${await getBodyOrNull(res)}`

export const getJSONHeaders = (res: Response) =>
  JSON.stringify(res.headers.raw());

export const getBodyOrNull = async (res: Response) => {
  try {
    return await res.text();
  } catch (error) {
    return null;
  }
}

export const values = (obj: any) =>
  Object.keys(obj).map(key => obj[key]);