export const tasks = [
    {
      id: 'open',
      title: 'Open',
      borderColor: 'border-orange-400',
      projects: [
        { 
          id: 1, 
          title: 'High Performance Computing Resource Monitor',
          description: 'Real-time monitoring and analytics for Yale HPC clusters supporting environmental research',
          tech: ['Python', 'React', 'Grafana'],
          startDate: '2024-03-01'
        },
        {
          id: 2,
          title: 'Environmental Data Catalog',
          description: 'Unified catalog system for environmental datasets with metadata management',
          tech: ['PostgreSQL', 'FastAPI', 'Vue.js'],
          startDate: '2024-03-15'
        },
        {
          id: 3,
          title: 'Forest Carbon Modeling Pipeline',
          description: 'Automated workflow for processing LiDAR data and calculating forest carbon metrics',
          tech: ['R', 'Python', 'GDAL'],
          startDate: '2024-03-20'
        }
      ]
    },
    {
      id: 'inprogress',
      title: 'In Progress',
      borderColor: 'border-yellow-400',
      projects: [
        {
          id: 4,
          title: 'Climate Data Pipeline',
          description: 'Automated processing pipeline for climate model outputs and environmental datasets',
          tech: ['Python', 'Dask', 'xarray'],
          startDate: '2024-02-15'
        },
        {
          id: 5,
          title: 'Biodiversity Database Integration',
          description: 'Centralizing and standardizing biodiversity data from multiple field stations',
          tech: ['Python', 'PostgreSQL', 'PostGIS'],
          startDate: '2024-02-01'
        }
      ]
    },
    {
      id: 'completed',
      title: 'Completed',
      borderColor: 'border-green-400',
      projects: [
        {
          id: 6,
          title: 'Biodiversity Image Analysis',
          description: 'Machine learning pipeline for processing and analyzing wildlife camera trap images',
          tech: ['PyTorch', 'OpenCV', 'TensorFlow'],
          startDate: '2024-01-20'
        },
        {
          id: 7,
          title: 'HPC Job Template Generator',
          description: 'Web tool for creating optimized SLURM job scripts for environmental applications',
          tech: ['React', 'Node.js', 'Shell'],
          startDate: '2024-01-10'
        }
      ]
    }
  ];