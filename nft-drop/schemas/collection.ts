export default {
    name:'collection',
    title: 'Collection',
    type: 'document',
    fields: [
        {
        name: 'title',
        description: 'Enter the NFT DROP Title',
        title: 'Title',
        type: 'string'
    },
    
    {
        name: 'description',
        title: 'Description',
        type: 'string',
    },

    {
        name: 'nftCollectionName',
        title: 'Name Of NFT Collection',
        type: 'string',
    },

    {
        name: 'address',
        title: 'ADDRESS',
        type: 'string'
    },

    {
        name: 'creator',
        title: 'Creator',
        type: 'reference',
        to: {type: 'creator'},
    },

    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'nftCollectionName',
            maxLength: 96,
        },
    },
    {
        name:'mainimage',
        title:'Main Image',
        type: 'image',
        options:{hotspot:true},
    },

    {
        name:'previewimage',
        title:'Preview Image',
        type: 'image',
        options:{hotspot:true},
    },
],
}