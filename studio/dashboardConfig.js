export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6a0939f623597be4a04119',
                  title: 'Sanity Studio',
                  name: 'jatto-sanity-gridsome-blog-studio',
                  apiId: '3f759d01-9538-460b-9b87-2fad6f4be10b'
                },
                {
                  buildHookId: '5e6a0939fd47ae966c4d2363',
                  title: 'Blog Website',
                  name: 'jatto-sanity-gridsome-blog',
                  apiId: '475d1033-c25a-46a1-9a62-5149219303e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jattoabdul/jatto-sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jatto-sanity-gridsome-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
