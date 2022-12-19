export default {
    name:'creator',
    title: 'Author',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'Name',
        type: 'string'
    },
    
    {
        name: 'address',
        title: 'ADDRESS',
        type: 'string'
    },

    {
        name: 'bio',
        title: 'Bio',
        type: 'string'
    },

    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 96,
        },
    },
    {
        name:'image',
        title:'Image',
        type: 'image',
        options:{hotspot:true},
    },
],
}