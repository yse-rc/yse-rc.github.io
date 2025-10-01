export const newsItems = [
    {
      id: 12,
      type: 'video',
      title: 'Introduction to AI/ML on Yale Clusters',
      description: 'First in a series covering foundational machine learning concepts and how to run AI workflows effectively on Yale YCRC systems. Learn the building blocks of modern AI with practical deployment on HPC infrastructure.',
      link: 'https://www.youtube.com/watch?v=3bHYKMt9PD4',
      linkText: 'Watch on YouTube',
      src: 'https://www.youtube.com/embed/3bHYKMt9PD4',
      width: '100%',
      height: '100%',
      frameBorder: '0',
      scrolling: 'no',
      allowFullScreen: true,
      iframeTitle: 'Introduction to AI/ML on Yale Clusters',
      date: '2025-09-01'
    },
    {
      id: 5,
      type: 'video',
      title: 'National Artificial Intelligence Research Resource Pilot',
      description: '2-minute video about the NAIRR Pilot program and how to get free AI computing from government-supported and non-governmental partners.',
      link: 'https://nairrpilot.org/',
      linkText: 'NAIRR Pilot Homepage',
      src: 'https://player.vimeo.com/video/1078104320?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
      width: '100%',
      height: '100%',
      frameBorder: '0',
      scrolling: 'no',
      allowFullScreen: true,
      iframeTitle: 'Horn_Mitchell-NAIRR',
      date: '2025-04-25'
    },
    {
      id: 4,
      title: 'Update on data.gov Datasets',
      description: 'Reports indicate that 2,000+ datasets have disappeared from data.gov. While some data may still exist on individual agency websites, many resources are potentially lost, relocated, or hidden. Multiple independent archival groups are actively tracking changes & backing up at-risk datasets, like the EOT Archives. If you are concerned about missing data or need assistance locating it, please reach out to me.',
      link: 'https://web.archive.org/collection-search/EndOfTerm2024PreElectionCrawls',
      linkText: 'Comprehensive crawl and aggregate of U.S. government websites',
      date: '2025-02-04'
    },
    {
      id: 3,
      title: 'Bouchet HPC Cluster Beta Testing at MGHPCC',
      description: 'The YCRC\'s first installation at MGHPCC, Bouchet (4,000 direct-liquid-cooled cores), is available for beta testing through December. Currently seeking users with tightly coupled, parallel workloads. General purpose and GPU nodes will be available in early 2025.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScjJYSkpyu-UqGH09Tgp2HS3xQ0NFjLOdg6_pRAMDKr4uiU0w/viewform',
      linkText: 'Request beta access to Bouchet',
      date: '2025-01-08'
    },
    {
      id: 2,
      title: 'GPT-4o-mini Now Available on Clarity',
      description: 'A new energy-efficient model GPT-4o-mini is now available on the Clarity Platform. This agent offers similar capabilities to GPT-4o with reduced energy consumption and is suitable for most day-to-day tasks. Available via agent selection dropdown in the Clarity UI.',
      link: 'https://ai.yale.edu/posts/2024-12-19-release-notes-v090',
      linkText: 'Learn more about the new Clarity features',
      date: '2024-12-19'
    },
    {
      id: 1,
      title: 'HPC Standard Tier Now Free',
      description: 'HPC will no longer incur charges on standard tier partitions (devel, day, week, mpi, gpu, etc.). Private nodes will continue to not incur charges.',
      link: 'https://docs.ycrc.yale.edu/clusters-at-yale/job-scheduling/priority-tier/',
      linkText: 'Learn more about the new priority tier',
      date: '2024-11-22'
    },
    {
      id: 6,
      type: 'video',
      title: 'How should we do Linear Regression?',
      description: 'Non-pretentious, informal recap by Prof. Richard Samworth (Cambridge) hosted by Yale FDS. Covers optimal convex loss for regression, robust efficiency, and practical insights.',
      link: 'https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=95b75ca5-0342-489a-a622-b27a0169757c',
      linkText: 'Watch the video (Yale SSO required)',
      date: '2025-04-20'
    },
    {
      id: 7,
      title: 'Overleaf Premium Now Free via Yale',
      description: 'Yale now offers free Overleaf premium accounts. Sign up or upgrade with your Yale credentials to access advanced collaborative LaTeX features.',
      link: 'https://www.overleaf.com/edu/yale#overview',
      linkText: 'Get Overleaf Premium',
      date: '2025-04-04'
    },
    {
      id: 8,
      title: 'MarketScan Data Access for Yale Researchers',
      description: 'Yale researchers can now access MarketScan Research Databases (2014–2023): 10B+ records, 68M+ patients, covering claims, labs, and dental. Requires Yale PI and data use agreement. Supported by YBIC, Medical Library, and YCCI.',
      link: 'https://datamed.library.medicine.yale.edu/marketscan',
      linkText: 'Access MarketScan',
      date: '2025-03-03'
    },
    {
      id: 9,
      title: 'Yale Remote Sensing Accelerator – Apply by May 18',
      description: 'The Yale Center for Geospatial Solutions and Yale Library are excited to launch the Yale Remote Sensing Accelerator, a new week-long program coming June 9—13, 2025. This week-long program offers direct instruction and hands-on experience in processing satellite imagery. For inquiries, contact: geospatialhelp@yale.edu',
      link: 'https://click.message.yale.edu/?qs=1e86b4cce464fdf092197c6ce02ca7e7e4bd74c64837a0e65f30f1f5ad23b6a9d7f0dc648e59f262d1b17cd3c636e34a459804f5e94604f48ddec8a6a40d1310',
      linkText: 'Application Form',
      date: '2025-05-13'
    },
    {
      id: 10,
      title: 'Update: Navigating and Rescuing At-Risk Environmental Data',
      description: 'We have published a new resource to help you locate, navigate, and rescue at-risk datasets. This page provides guidance, context, and links to at-risk or relocated data sources.',
      link: 'https://yse-rc.github.io/at-risk-data',
      linkText: 'At-Risk Data Rescue Resource',
      date: '2025-05-14'
    },
    {
      id: 11,
      title: 'Copyright Considerations for AI Projects: Yale Library Guidance',
      description: 'If you are using AI tools for research or content creation, be aware of important copyright, licensing, and ethical considerations. Yale Library provides guidance on intellectual property, fair use, and the use of licensed resources with AI. Review their recommendations and resources to ensure your project is compliant and responsible.',
      link: 'https://guides.library.yale.edu/libraryAI',
      linkText: 'Yale Library: AI Guidance and Copyright',
      date: '2025-05-07'
    },
    {
      id: 12,
      title: 'Bouchet HPC is now available to all Yale Researchers',
      description: 'The Bouchet HPC cluster is now available for all Yale researchers. Bouchet contains direct-liquid-cooled cores as well as NVIDIA A5000Ada GPUs. Accounts on Bouchet can be requested now and information sessions on transitioning from Grace and McCleary to Bouchet will be held later this summer. Dates will be announced by YCRC soon!',
      link: 'https://docs.ycrc.yale.edu/clusters/bouchet/',
      linkText: 'Bouchet HPC Information and Application Page',
      date: '2025-07-03'
    },
    {
      id: 13,
      title: 'Hopper is now available to all Yale Researchers',
      description: 'A new research computing platform, Hopper, is now available for analysis of large-scale, high-risk data. It has an initial 60 compute nodes and more than 200 GPUs. Hopper enables advanced simulations, large-scale data analysis, and secure use of large language models for cutting-edge research.',
      link: 'https://docs.ycrc.yale.edu/clusters/hopper/',
      linkText: 'Hopper HPC Information and Application Page',
      date: '2025-08-26'
    },
    {
      id: 14,
      title: 'SpinUpPlus is now available to all Yale Researchers',
      description: 'SpinupPlus, an extension of Yale’s Spinup service, powered by Amazon Web Services’ (AWS) cloud-based computing platform. SpinUpPlus allows researchers to quickly launch secure, virtual servers and infrastructure for data analysis, web applications, and other research computing needs while ensuring institutional compliance and scalability. It offers a secure, scalable, and managed environment tailored for human subjects research that involves sensitive data, including Protected Health Information (PHI).',
      link: 'https://medicine.yale.edu/ybic/computational-resources/yale/',
      linkText: 'Hopper HPC Information and Access Page',
      date: '2025-08-26'
    },
    {
      id: 15,
      title: 'Esri License Renewal Announcement',
      description: 'The Esri license has been extended until August 31, 2026. The Esri license renewal is seamless for Esri ArcGIS Pro Named Users and Esri web-based (SaaS) Users (e.g., ArcGIS Online, ArcGIS StoryMaps, Dashboard, etc.); therefore, no action is required on your part. A handful of users who have requested air-gapped (single-use) ArcGIS Pro licenses or single-use data licenses will need to submit a request for a new license to geospatialhelp@yale.edu.',
      link: 'https://guides.library.yale.edu/onlinemapping/AGOL',
      linkText: 'ArcGIS Online Resources at Yale',
      date: '2025-08-29'
    },
    {
      id: 16,
      title: 'Peter Salovey and Marta Moret Data Science Fellows Program',
      description: 'The Peter Salovey and Marta Moret Data Science Fellows Program, beginning March 2026, supports PhD Students at Yale who use data science methods in interdisciplinary research. The program provides funding, mentorship, and access to resources to help fellows advance their research and professional development. Applications open on March 1, 2026.',
      link: 'https://fds.yale.edu/fellows/',
      linkText: 'Fellows Program Information Page',
      date: '2025-10-01'
    }
];
