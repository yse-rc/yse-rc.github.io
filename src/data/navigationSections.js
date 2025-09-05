import { 
  HomeIcon, 
  InformationCircleIcon, 
  BookOpenIcon, 
  ExclamationTriangleIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

export const getNavigationSections = (pathname) => [
  { 
    id: 'home',
    label: 'Home',
    icon: HomeIcon,
    path: '/',
    children: pathname === '/' ? [
      { id: 'news', label: 'News' },
      { id: 'events', label: 'Events' }
    ] : [],
    separator: true
  },
  { 
    id: 'info',
    label: 'Info',
    icon: InformationCircleIcon,
    path: '/info',
    children: pathname === '/info' ? [
      { id: 'mission', label: 'Mission' },
      { id: 'people', label: 'People' }
    ] : []
  },
  {
    id: 'govdata',
    label: 'At-Risk Data',
    icon: ExclamationTriangleIcon,
    path: '/at-risk-data',
    children: pathname.startsWith('/at-risk-data') ? [
      { id: 'rescue-workflow', label: 'Workflow' },
      { id: 'data-rescue-tracker', label: 'Tracker' },
      { id: 'additional-resources', label: 'Resources' }
    ] : []
  },
  {
    id: 'knowledge',
    label: 'Knowledge Base',
    icon: BookOpenIcon,
    path: '/knowledge',
    children: pathname.startsWith('/knowledge') ? [
      { 
        id: 'ai',
        label: 'AI',
        path: '/knowledge/ai',
        nestedChildren: [
          { id: 'ai-tools-yale', label: 'AI Tools @ Yale', path: '/knowledge/ai/ai-tools-yale' },
          { id: 'ai-taxonomy', label: 'AI Taxonomy', path: '/knowledge/ai/ai-taxonomy' },
          { id: 'model-selection', label: 'Model Selection', path: '/knowledge/ai/model-selection' },
          { id: 'prompting', label: 'Prompting', path: '/knowledge/ai/prompting' }
        ]
      },
      { 
        id: 'data',
        label: 'Data',
        path: '/knowledge/data',
        nestedChildren: [
          { id: 'data-storage', label: 'Data Storage', path: '/knowledge/data/data-storage' }
        ]
      },
      { 
        id: 'prof-dev',
        label: 'Prof Dev',
        path: '/knowledge/prof-dev',
        nestedChildren: [
          { id: 'trainings', label: 'Trainings', path: '/knowledge/prof-dev/trainings' }
        ]
      },
      { 
        id: 'yale-computing',
        label: 'Yale Computing',
        path: '/knowledge/yale-computing',
        nestedChildren: [
          { id: 'ycrc-clusters', label: 'YCRC Clusters', path: '/knowledge/yale-computing/ycrc-clusters' }
        ]
      }
    ] : []
  },
  {
    id: 'related-centers',
    label: 'Related Centers',
    icon: LinkIcon,
    path: '#related-centers',
    children: [
      { 
        id: 'ycrc', 
        label: 'Yale Center for Research Computing', 
        href: 'https://docs.ycrc.yale.edu/', 
        external: true 
      },
      { 
        id: 'ycgs', 
        label: 'Yale Center for Geospatial Solutions', 
        href: 'https://geospatial.yale.edu/', 
        external: true 
      },
      { 
        id: 'dissc', 
        label: 'Yale Data-Intensive Social Science', 
        href: 'https://dissc.yale.edu/', 
        external: true 
      },
      { 
        id: 'ybic', 
        label: 'Yale Biomedical Informatics & Computing', 
        href: 'https://medicine.yale.edu/ybic/', 
        external: true 
      },
      { 
        id: 'yse-it', 
        label: 'YSE IT', 
        href: 'https://resources.environment.yale.edu/resources/computing/', 
        external: true 
      }
    ]
  }
];