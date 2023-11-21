import { NextApiRequest, NextApiResponse } from 'next'

export const setHeaders = (req: NextApiRequest, res: NextApiResponse): boolean => {
  // set SPR/CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'pragma')
  
  if (req.method !== 'OPTIONS') return false

  res.status(200)
  res.end()
  return true
}

export const handleData = async (res: NextApiResponse, data: any) => {
  data = data || { status: 'error', message: 'unhandled request' }
  res.status(data.status !== 'error' ? 200 : 500)
  res.json(data)
}

export const handleError = (res: NextApiResponse, error: string | Error) => {
  console.error(error)
  res.status(500).json({
    status: 'error',
    message: 'an error occurred processing request',
  })
}