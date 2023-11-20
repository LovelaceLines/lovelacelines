import Axios from "axios";
import { unstable_cache } from "next/cache";

// https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/

const revalidate = 24 * 60 * 60; // 24 hours

export interface IFeed {
  id: string;
  caption: string | null; // O texto na legenda da mídia. Não retornável para mídias em álbuns.
  is_shared_to_feed: boolean | null; // Somente para Reels. true indica que o reel pode aparecer nas abas Feed e Reels. false indica que o reel pode aparecer apenas na aba Reels.
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'; // O tipo de mídia. Pode ser IMAGE, VIDEO ou CAROUSEL_ALBUM.
  media_url: string; // O URL da mídia.
  permalink: string; // A URL permanente da mídia. Será omitida se a mídia contiver material protegido por direitos autorais ou tiver sido sinalizada como violação desses direitos.
  username: string; // O nome de usuário do proprietário da mídia.
  children: { // Obtenha a lista de mídias do álbum. Disponível somente em mídias de CAROUSEL_ALBUM.
    data: IFeed[];
  };
}

export async function GET() {
  if (!process.env.INSTAGRAM_TOKEN) throw new Error('Token not found');

  const token = process.env.INSTAGRAM_TOKEN;
  const fields = 'id,caption,is_shared_to_feed,media_type,media_url,permalink,username,children';
  const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`;

  try {
    const response = await fetch(url, { next: { revalidate } })
      .then(res => res.json() as Promise<{ data: IFeed[] }>)
      .then(res => res.data);
    return Response.json(response);
  } catch (e) {
    if (process.env.NODE_ENV === 'development') console.log(e);
    return Response.error();
  }
}