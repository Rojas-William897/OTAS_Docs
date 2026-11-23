import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '795'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '811'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '86a'),
            routes: [
              {
                path: '/docs/Avionics/',
                component: ComponentCreator('/docs/Avionics/', 'eff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General_Meetings/2026-09-27',
                component: ComponentCreator('/docs/General_Meetings/2026-09-27', '968'),
                exact: true
              },
              {
                path: '/docs/General_Meetings/2026-10-18',
                component: ComponentCreator('/docs/General_Meetings/2026-10-18', 'ee7'),
                exact: true
              },
              {
                path: '/docs/General_Meetings/2026-10-4',
                component: ComponentCreator('/docs/General_Meetings/2026-10-4', '503'),
                exact: true
              },
              {
                path: '/docs/General_Meetings/2026-11-01',
                component: ComponentCreator('/docs/General_Meetings/2026-11-01', '598'),
                exact: true
              },
              {
                path: '/docs/General_Meetings/2026-11-08',
                component: ComponentCreator('/docs/General_Meetings/2026-11-08', '403'),
                exact: true
              },
              {
                path: '/docs/General_Meetings/2026-11-15',
                component: ComponentCreator('/docs/General_Meetings/2026-11-15', '13f'),
                exact: true
              },
              {
                path: '/docs/General_Meetings/2026-11-22',
                component: ComponentCreator('/docs/General_Meetings/2026-11-22', '9b2'),
                exact: true
              },
              {
                path: '/docs/General_Meetings/General',
                component: ComponentCreator('/docs/General_Meetings/General', 'a52'),
                exact: true
              },
              {
                path: '/docs/General_Meetings/Template',
                component: ComponentCreator('/docs/General_Meetings/Template', 'e34'),
                exact: true
              },
              {
                path: '/docs/Mech/Mechanical',
                component: ComponentCreator('/docs/Mech/Mechanical', '1f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Payload/',
                component: ComponentCreator('/docs/Payload/', 'd10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Software/',
                component: ComponentCreator('/docs/Software/', '1e5'),
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
