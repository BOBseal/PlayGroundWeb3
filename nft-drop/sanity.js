import {createCurrentUserHook ,createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const configs ={
    dataset : process.env.NEXT_PUBLIC_DATASET_SANITY || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITYPROJECT_ID ,
    apiVersion: '2021-03-25',
    useCDN: process.env.NODE_ENV === 'production',
}
export const sanityClient = createClient(configs)
export const urlFor =(source) => createImageUrlBuilder(configs).image(source)





