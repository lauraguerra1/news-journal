type Indexable = {
  [key: string]: any
}

type apiResponse = {
  "status": string, 
  "totalResults": number,
  "articles": article[]
}

type article = Indexable & {
  "source": {
    "id": string,
    "name": string
    },
    "author": string,
    "title": string,
    "description": string,
    "url": string,
    "urlToImage": string,
    "publishedAt": string,
    "content": string
}

export type {article, apiResponse}