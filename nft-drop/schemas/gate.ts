export default{
    name:'gatedpage',
    title: 'GatedPage',
    type: 'document',
    fields : [
        {
            name: 'name',
            title : 'Name',
            type: 'string',
        },
        {
            name: 'pageurl',
            title : 'URL',
            type : 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'pageurl',
                maxLength: 96,
            },
        },
    ]
}