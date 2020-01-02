export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e0defc646e9968f14a17aac',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-muxvideo-studio',
                  apiId: '6909c8cf-064d-4c90-a9a4-11fbf589f9da'
                },
                {
                  buildHookId: '5e0defc6cc351ec7263fb3a6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-muxvideo',
                  apiId: '1f603fb7-08c0-46ee-8fb1-49aa468c8641'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bridjno/sanity-nextjs-muxvideo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-muxvideo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
