import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', 'ec3'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'b14'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '5c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4f6'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '096'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '394'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '731'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '4fa'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'dfe'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '61a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1c8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '8c1'),
            routes: [
              {
                path: '/docs/Avionics/',
                component: ComponentCreator('/docs/Avionics/', 'a98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General_Meetings/2026-10-18',
                component: ComponentCreator('/docs/General_Meetings/2026-10-18', '7f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General_Meetings/2026-10-4',
                component: ComponentCreator('/docs/General_Meetings/2026-10-4', '668'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General_Meetings/2026-9-27',
                component: ComponentCreator('/docs/General_Meetings/2026-9-27', 'a60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General_Meetings/General',
                component: ComponentCreator('/docs/General_Meetings/General', '93a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Mech/',
                component: ComponentCreator('/docs/Mech/', '3c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Payload/',
                component: ComponentCreator('/docs/Payload/', 'e76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Software/',
                component: ComponentCreator('/docs/Software/', '89c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Welcome',
                component: ComponentCreator('/docs/Welcome', '3ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
