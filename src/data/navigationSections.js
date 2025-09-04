import { 
  HomeIcon, 
  InformationCircleIcon, 
  BookOpenIcon, 
  GlobeAltIcon
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
    label: 'Federal Data',
    icon: GlobeAltIcon,
    path: '/govdata',
    children: pathname.startsWith('/govdata') ? [
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
          { id: 'model-selection', label: 'Model Selection', path: '/knowledge/ai/model-selection' },
          { id: 'ai-taxonomy', label: 'AI Taxonomy', path: '/knowledge/ai/ai-taxonomy' },
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
  }
];