export const tasks = [
    {
      id: 'open',
      title: 'Requested',
      borderColor: 'border-orange-400',
      projects: [
        { 
          id: 1, 
          title: 'Cellular segmentation via growth algorthm',
          description: 'Non-uniform segmentation of 3D structures via classifier and growth algorthm to boundaries.',
          tech: ['Python', 'Image Segmentation', 'Machine Learning'],
          startDate: '2024-10-24'
        },
        {
          id: 3,
          title: 'Data visualization and analysis',
          description: 'Development of a data visualization and analysis pipeline for web data, zoom data, and survey data.',
          tech: ['R', 'Python', 'HPC', 'Git'],
          startDate: '2024-11-22'
        },
        {
          id: 4,
          title: 'Google-Solar-API',
          description: 'Data abstraction and API integration for Google Solar data.',
          tech: ['Python', 'HPC', 'Google'],
          startDate: '2024-10-14'
        },
      ]
    },
    {
      id: 'inprogress',
      title: 'In Progress',
      borderColor: 'border-yellow-400',
      projects: [
        {
          id: 14,
          title: 'NSF Data Management Plan Templates',
          description: 'Development of YSE-specific boilerplate templates and guidance for NSF Data Management Plans, including data sharing, preservation, and access protocols.',
          tech: ['Documentation', 'Data Management', 'Research Computing', 'NSF'],
          startDate: '2025-01-15'
        },
        {
          id: 13,
          title: 'Census Data Fusion and Downscaling',
          description: 'Development of statistical data integration methods for fusing and downscaling diverse census datasets.',
          tech: ['R', 'Data Fusion', 'Statistical Modeling', 'Census Data'],
          startDate: '2024-12-19'
        },
        {
          id: 4,
          title: 'BioClip Fine-Tuning',
          description: 'Adhoc data incorporation to BioClip for agentic AI of seedling detection.',
          tech: ['Python', 'HPC', 'CLIP', 'AI', 'Embedding'],
          startDate: '2024-10-29'
        },
        {
          id: 8,
          title: 'YSE-Storage Globus Integration',
          description: 'Globus Connect Server on YSE-Storage for large file transfers.',
          tech: ['Storage', 'Globus', 'File Transfer'],
          startDate: '2024-09-01'
        },
        {
          id: 2,
          title: 'Longitudinal unstructured data version control',
          description: 'Longitdunal study data organization, structure, and version control implementation.',
          tech: ['HPC', 'Parquet', 'DVC', 'Git', 'Dropbox'],
          startDate: '2024-10-14'
        },
      ]
    },
    {
      id: 'completed',
      title: 'Completed',
      borderColor: 'border-green-400',
      projects: [
        {
          id: 6,
          title: 'Big Data Network Transfering',
          description: 'Optimize workflow for transfering 10\'s of millions of files across a network.',
          tech: ['Pigz', 'File Transfer', 'Globus', 'HPC', 'Parallelization'],
          startDate: '2024-11-10'
        },
        {
          id: 7,
          title: 'Research Data Management and Version Control',
          description: 'Implement version control and data management for cross-instituttional research project.',
          tech: ['DVC', 'Git', 'HPC', 'Dropbox'],
          startDate: '2024-10-02'
        },
        {
          id: 10,
          title: 'GitHub migration to Yale GitHub Enterprise',
          description: 'Migration of research group public GitHub private docs/code to YSE-RC GitHub.',
          tech: ['Git'],
          startDate: '2024-11-13'
        },
        {
          id: 11,
          title: 'Optimization of Large Memory Workloads',
          description: 'Implementation of parallelizaed and memory reduced workflows for large memory workloads.',
          tech: ['R', 'Parquet', 'Parallelization'],
          startDate: '2024-11-20'
        },
        {
          id: 12,
          title: 'Webscraping and Data Extraction',
          description: 'Webscraping and data extraction with rate-limited avoidance workflow.',
          tech: ['Python', 'HPC', 'Webscraping'],
          startDate: '2024-10-22'
        },
        {
          id: 9,
          title: 'Unstructured Big Data Conversion',
          description: 'Converting large unstructured data to structured, compact, and accessibledata for analysis.',
          tech: ['Storage', 'Globus', 'File Transfer', 'Querying', 'Dask', 'Parquet'],
          startDate: '2024-11-08'
        },
        {
          id: 5,
          title: 'RAG AI Model Development',
          description: 'Retrieval Augmented Generation AI model development for >1000 targeted research papers.',
          tech: ['Python', 'RAG', 'Vector Databases', 'Embedding'],
          startDate: '2024-09-09'
        },
      ]
    }
  ];