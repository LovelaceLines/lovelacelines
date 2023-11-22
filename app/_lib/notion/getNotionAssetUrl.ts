import fetch from "node-fetch";
import { getError } from "./rpc";
import { NextApiResponse } from "next";

export const getNotionAsset = async (res: NextApiResponse, assetURL: string, blockId: string): Promise<any> => {
  const { API_ENDPOINT, NOTION_TOKEN } = process.env;

  const requestURL = `${API_ENDPOINT}/getSignedFileUrls`;
  const requestHeaders = {
    cookie: `token_v2=${NOTION_TOKEN};`,
    "Content-Type": "application/json",
  };
  
  const response = await fetch(requestURL, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify({
      urls: [{
        url: assetURL,
        permissionRecord: {
          table: "block",
          id: blockId,
        },
      }]
    })
  });

  if (response.ok) return response.json();
  
  res.status(response.status);

  console.log("Error fetching Notion asset", response.status, response.statusText);
  throw new Error(await getError(response));
}