import { Description } from "@ethersproject/properties";

interface Image{
    asset :{url:string}
}

export interface Creator{
    _id: string
    name: string
    address: string
    slug:{current :string}
    image: Image
    bio:string
}

export interface COLLECTION{
    _id:string
    title:string
    description:string
    nftCollectionName:string
    address:string
    slug: {current:string}
    creator: Creator
    mainimage: Image
    previewimage: Image
}
export interface GATE {
    _id: string
    name:string
    pageurl: string
    slug:{current: string}
}