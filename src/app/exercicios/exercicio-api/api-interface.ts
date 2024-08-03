export interface ApiInterface {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
    data: Data;
  }
  interface Data {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Result[];    
  }
  export interface Result {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description?: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Url[];
    series: Series;
    variants: Series[];
    collections: Series[];
    collectedIssues: Series[];
    dates: Date[];
    prices: Price[];
    thumbnail: Thumbnail;
    images: Thumbnail[];
    creators: Creators;
    characters: Characters;
    stories: Stories;
    events: Events;
  }
  interface Events {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
  }
  interface Stories {
    available: number;
    collectionURI: string;
    items: Item2[];
    returned: number;
  }
  interface Item2 {
    resourceURI: string;
    name: string;
    type: string;
  }
  interface Characters {
    available: number;
    collectionURI: string;
    items: Series[];
    returned: number;
  }
  interface Creators {
    available: number;
    collectionURI: string;
    items: Item[];
    returned: number;
  }
  interface Item {
    resourceURI: string;
    name: string;
    role: string;
  }
  interface Thumbnail {
    path: string;
    extension: string;
  }
  interface Price {
    type: string;
    price: number;
  }
  interface Date {
    type: string;
    date: string;
  }
  interface Series {
    resourceURI: string;
    name: string;
  }
  interface Url {
    type: string;
    url: string;
  }
  interface TextObject {
    type: string;
    language: string;
    text: string;
  }