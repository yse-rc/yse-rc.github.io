import React, { useState } from 'react';

const categories = [
  {
    id: 'data-website-rescue-efforts',
    label: 'Data & Website Rescue Efforts',
  },
  {
    id: 'education',
    label: 'Education',
  },
  {
    id: 'environment-climate',
    label: 'Environment & Climate',
  },
  {
    id: 'public-health',
    label: 'Public Health',
  },
  {
    id: 'museums-and-libraries',
    label: 'Museums and Libraries',
  },
  {
    id: 'usaid',
    label: 'USAID',
  },
];

const DataRescueResources = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Helper to render a section by id, label, and children
  const renderSection = (id, label, children) => (
    <div id={id} className={`pb-6 border-b border-gray-200`}>
      <h3 className="text-xl font-semibold mb-4 text-gray-700">{label}</h3>
      <div className="space-y-4 max-h-80 overflow-y-auto pr-4 pb-2">
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 text-center">
        Additional Data Rescue Resources
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        This resource guide provides links to organizations performing data and website rescue efforts, as well as information about government data preservation during administration transitions.
      </p>
      {/* Category navigation as filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
        >
          Show All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            {category.label}
          </button>
        ))}
      </div>
      {/* Scrollable resources container */}
      <div className="space-y-8">
        {(activeCategory === null || activeCategory === 'data-website-rescue-efforts') && renderSection(
          'data-website-rescue-efforts',
          'Data & Website Rescue Efforts',
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://archive-it.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Archive-it</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                The Federal Depository Library Program (FDLP) Web Archive. Harvested by Library Services and Content Management (LSCM) and U.S. Government Publishing Office (GPO).
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://wiki.archiveteam.org/index.php/Main_Page" target="_blank" rel="noopener noreferrer" className="hover:underline">Archive Team</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An offloading point and information depot for a number of archiving projects, all related to saving websites or data that is in danger of being lost, including archiving the federal government.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://source.coop/repositories/harvard-lil/gov-data/description" target="_blank" rel="noopener noreferrer" className="hover:underline">Archive of Data.gov</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Files collected intermittently between 2024-11-19 and 2025-02-06. The repository is updated daily. Created by Harvard Law School Library Innovation Lab.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://biglocalnews.org/content/about/" target="_blank" rel="noopener noreferrer" className="hover:underline">Big Local News</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Gathers data, builds tools and collaborates with reporters to provide access to public records. Some projects have been archived by the Stanford Digital Repository.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://edgi-govdata-archiving.github.io/j40-cejst-2/en/#3/33.47/-97.5" target="_blank" rel="noopener noreferrer" className="hover:underline">Climate & Economic Justice Screening Tool</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Interactive map using datasets that indicate burdens communities experience in eight categories. Downloaded and rehosted in advance of potential removal.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://datahoarding.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Data Hoarding</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An index of resources and archives related to data hoarding, web archival and self hosting, inspired by the recent purge of online information by government agencies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.data-liberation-project.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Data Liberation Project</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An initiative to identify, obtain, reformat, clean, document, publish, and disseminate government datasets of public interest.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datarescueproject.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Data Rescue Project</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                A coordinated effort among data organizations, including IASSIST, RDAP, and members of the Data Curation Network. Serves as a clearinghouse for data rescue-related efforts and access points for public US governmental data currently at risk. See what data is being saved with their <a href="https://www.datarescueproject.org/data-rescue-tracker/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Data Rescue Tracker</a>. Follow on <a href="https://bsky.app/profile/datarescueproject.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Bluesky</a>.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://github.com/UW-CALMA/datarescue" target="_blank" rel="noopener noreferrer" className="hover:underline">Data Rescues 2025</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                In response to political threats to social, environmental, health, and personal data, the University of Washington Center for Advances in Libraries, Museums, and Archives (CALMA) is hosting a series of DATA RESCUE efforts.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datalumos.org/datalumos/" target="_blank" rel="noopener noreferrer" className="hover:underline">DataLumos</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An ICPSR archive for valuable government data resources with a long commitment to safekeeping and disseminating US government data. Contains older versions of many major datasets, including some from the CDC. This is the main repository for Data Rescue Project's data with added data from FEMA, the Department of Education, and IMLS.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://digitalgovernmenthub.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Digital Government Hub</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                A dynamic, open-source reference library for anyone using design, data, and technology to improve and enhance government service delivery.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://datadryad.org/stash" target="_blank" rel="noopener noreferrer" className="hover:underline">Dryad</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An open data publishing platform and a community committed to the open availability and routine re-use of all research data. Generalist repository available to help with data publication, storage, and preservation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://eotarchive.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">End of Term Web Archive</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Captures and saves U.S. Government websites at the end of presidential administrations. The EOT has preserved websites from administration changes in 2008, 2012, 2016, and 2020.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://findlostdata.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Find Lost Data</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                This search tool provides links for data that have been downloaded from federal, state, and local agencies. Boston University School of Public Health.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.govtrack.us/" target="_blank" rel="noopener noreferrer" className="hover:underline">GovTrack</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Tracks the activities of the United States Congress.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.icpsr.umich.edu/web/pages/" target="_blank" rel="noopener noreferrer" className="hover:underline">ICPSR</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Maintains a data archive of more than 350,000 files of research in the social and behavioral sciences. It hosts 23 specialized collections of data in education, aging, criminal justice, substance abuse, terrorism, and other fields.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datalumos.org/datalumos/search/studies?start=0&ARCHIVE=datalumos&sort=score%20desc%2CDATEUPDATED%20desc&rows=25&q=IMLS" target="_blank" rel="noopener noreferrer" className="hover:underline">IMLS</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Direct link to Institute of Museum and Library Services (IMLS) archived data in DataLumos.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.ipums.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">IPUMS</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                The IPUMS Center for Data Integration, based at the University of Minnesota, provides census and survey data from around the world. As part of their standard procedures, they download and preserve original data from U.S. statistical agencies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.muckrock.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">MuckRock</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Provides a repository of government materials, information on how to file FOIA requests and tools to make the requesting process easier.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.reddit.com/r/DataHoarder/" target="_blank" rel="noopener noreferrer" className="hover:underline">r/Data Hoarder</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                A reddit community that is coordinating efforts to rescue data.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://ropercenter.cornell.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline">Roper Center</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Has collected over 50,000 files (datasets and documentation) from 22 federal survey projects. Cornell University.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://safeguarding-research.discourse.group/" target="_blank" rel="noopener noreferrer" className="hover:underline">Safeguarding Research</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Based in the EU, USA, and globally - this initiative has access to 1-2 PB of storage & people willing to seed for large-scale efforts, including a 350GB web archive of CDC.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://web.archive.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Wayback Machine</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Explore more than 928 billion web pages saved over time by the Internet Archive. Install the Wayback Machine Extension to easily save websites, view missing pages, or read archived resources.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://app.browsertrix.com/explore/usgov-archive" target="_blank" rel="noopener noreferrer" className="hover:underline">Webrecorder US Government Web Archive</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Has archived a large number of government sites both independently and as one of the End of Term Archive partners using Browsertrix web archiving technology.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://zenodo.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Zenodo</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An open dissemination research data repository for the preservation and making available of research, educational and informational content. Access to Zenodo's content is open to all, for non-military purposes only. CERN.
              </p>
            </div>
          </>
        )}
        {(activeCategory === null || activeCategory === 'education') && renderSection(
          'education',
          'Education',
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datalumos.org/datalumos/search/studies?start=0&sort=DATEUPDATED%20desc&ARCHIVE=datalumos&rows=25&q=department%20of%20education" target="_blank" rel="noopener noreferrer" className="hover:underline">Department of Education</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Direct link to Department of Education archived data in DataLumos.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://archive.org/details/ericarchive" target="_blank" rel="noopener noreferrer" className="hover:underline">Education Resources Information Center (ERIC) Archive</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An internet-based digital library of education research and information sponsored by the Institute of Education Sciences (IES) of the U.S. Department of Education. ERIC provides access to bibliographic records of journal and non-journal literature from 1966 to the present. Internet Archive.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://erica.datarescueproject.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">ERICA</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                A rescue catalog which preserves over 500,000 publications originally hosted by the U.S. Department of Education in the ERIC research repository. ERIC was an open access database of more than 2 million documents dating back to the 1960s. It ceased operating April 23, 2025 due to DOGE cuts. Education Resources Information Center Archive (ERICA).
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datalumos.org/datalumos/project/218981/version/V1/view" target="_blank" rel="noopener noreferrer" className="hover:underline">Integrated Postsecondary Education Data System (IPEDS) Series</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Complete data files from 1980 to 2023. The IPEDS surveys most postsecondary institutions annually, including universities and colleges, as well as institutions offering technical and vocational education beyond the high school level. Allows users to compare the characteristics of different postsecondary institutions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://docs.google.com/document/d/1H5qSJQE2N-wh6FxnWxBHE9r5Oq9mW-kI5Q_LDf4pKs4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="hover:underline">Journals No Longer Being Indexed By ERIC</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Crowdsourcing effort to figure out which journals are being removed from ERIC. From Michigan State University.
              </p>
            </div>
          </>
        )}
        {(activeCategory === null || activeCategory === 'environment-climate') && renderSection(
          'environment-climate',
          'Environment & Climate',
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://edgi-govdata-archiving.github.io/j40-cejst-2/en/#3/33.47/-97.5" target="_blank" rel="noopener noreferrer" className="hover:underline">Climate & Economic Justice Screening Tool</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                The tool has an interactive map and uses datasets that are indicators of burdens communities experience in eight categories: climate change, energy, health, housing, legacy pollution, transportation, water and wastewater, and workforce development. This tool has been downloaded and rehosted in advance of the Trump administration's takedown of this invaluable website and data resource.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://archive.org/details/cchhl_2025-02-10" target="_blank" rel="noopener noreferrer" className="hover:underline">Climate Change and Human Health Literature Portal (CCHHL) data dump</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Bibliographic information about 22,695 research items (journal articles etc.) as compiled by the National Institute of Environmental Health Sciences (NIEHS); part of the US federal government's National Institutes of Health (NIH) for its Climate Change and Human Health Literature Portal (CCHHL). Internet Archive.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://climate.daknob.net/" target="_blank" rel="noopener noreferrer" className="hover:underline">Climate Mirror Project</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Trying to mirror and safely archive U.S. Govt. websites and datasets related to climate, climate change, and global warming.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://climateprogramportal.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Climate Program Portal</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Tracks climate investments from the Infrastructure Investment and Jobs Act (IIJA) and the Inflation Reduction Act (IRA). Includes many of the latest publicly available datasets in the climate space, including emissions data, disadvantaged community designations, public investments, and climatic event information. Focused on preserving federal agency resources. Atlas Public Policy.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://github.com/UW-CALMA/datarescue" target="_blank" rel="noopener noreferrer" className="hover:underline">Data Rescues 2025</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                In response to political threats to social, environmental, health, and personal data, the University of Washington Center for Advances in Libraries, Museums, and Archives (CALMA) in collaboration with Seattle-based BKS Studio, is hosting a series of DATA RESCUE efforts.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://dataverse.harvard.edu/dataverse/DataRefuge" target="_blank" rel="noopener noreferrer" className="hover:underline">DataRefuge DataVerse</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                DataRefuge is also an initiative committed to identifying, assessing, prioritizing, securing, and distributing reliable copies of federal climate and environmental data so that it remains available to researchers. Harvard College.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://dataverse.harvard.edu/dataverse/cafe-extracted-data" target="_blank" rel="noopener noreferrer" className="hover:underline">Dataverse (CAFE)</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Data uploaded by the Climate Change and Health Research Coordinating Center (CAFE). Includes CDC's Social Vulnerability Index data. Most of what's being placed here is data focusing on health and the environment. Harvard College.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://envirodatagov.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">EDGI</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                A research collaborative and network of diverse professionals promoting evidence-based policy-making and public interest science that advances the Environmental Right to Know (ERTK). Environmental Data & Governance Initiative (EDGI).
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.data-liberation-project.org/datasets/epa-risk-management-program-database/" target="_blank" rel="noopener noreferrer" className="hover:underline">EPA Risk Management Program Database</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                A recently updated version of the EPA's Risk Management Program, with submissions through December 2024. It includes risk management plans filed by facilities with extremely hazardous substances. Data Liberation Project (DLP).
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://pedp-ejscreen.azurewebsites.net/" target="_blank" rel="noopener noreferrer" className="hover:underline">EPA's EJScreen 2.3</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An unofficial copy of EJScreen hosted by the Public Environmental Data Partners.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datalumos.org/datalumos/search/studies?start=0&sort=score%20desc%2CDATEUPDATED%20desc&ARCHIVE=datalumos&rows=25&q=FEMA" target="_blank" rel="noopener noreferrer" className="hover:underline">FEMA files</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Direct link to Federal Emergency Management Agency (FEMA) archived data in DataLumos.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://findlostdata.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Find Lost Data</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                This search tool provides links for data that have been downloaded from federal, state, and local agencies. Boston University School of Public Health.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://geocrawl.notion.site/" target="_blank" rel="noopener noreferrer" className="hover:underline">GeoCrawl</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                A community-led effort to crawl and archive map/GIS data. They have crawled through hundreds of known GIS servers and are seeking GIS applications that need archiving.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://emails.illinois.edu/newsletter/02/615978402.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Healthy Regions & Policies (HeRoP) Lab</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Preserved datasets and guidances include: The Center for Disease Control (CDC); The Environmental Protection Agency (EPA); The Health Resources and Services Administration (HRSA).
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://archive.org/details/noaa-heat-index-2025-01-17" target="_blank" rel="noopener noreferrer" className="hover:underline">NOAA Heat-Index Files</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Internet Archive.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://data.openei.org/home" target="_blank" rel="noopener noreferrer" className="hover:underline">Open Energy Data Initiative (OEDI)</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                A centralized repository of datasets aggregated from the U.S. Department of Energy's Programs, Offices, and National Laboratories.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.pangaea.de/" target="_blank" rel="noopener noreferrer" className="hover:underline">PANGAEA</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An Open Access library aimed at archiving, publishing and distributing georeferenced data from earth system research. It is actively archiving NOAA data. PANGAEA guarantees long-term availability (greater than 10 years) of its content. Hosted by the Alfred Wegener Institute and the University of Bremen.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://screening-tools.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Public Environmental Data Project</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Committed to preserving and providing public access to federal environmental data. They have identified 57 high-priority databases, of which 37 have been archived thus far [February 2025].
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://git.lsit.ucsb.edu/publicdata" target="_blank" rel="noopener noreferrer" className="hover:underline">PublicData - UC Santa Barbara</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Mirrored and archived public data on locally hosted git server. Includes retrieved data sets from CDC, DoE, NIH, and NOAA.
              </p>
            </div>
          </>
        )}
        {(activeCategory === null || activeCategory === 'public-health') && renderSection(
          'public-health',
          'Public Health',
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://acasignups.net/archiveorg" target="_blank" rel="noopener noreferrer" className="hover:underline">ACASignups.net</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Links to archived versions of every CDC government page (Parts 1 through 15).
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.acog.org/clinical/clinical-guidance/acog-endorsed" target="_blank" rel="noopener noreferrer" className="hover:underline">American College of Obstetricians and Gynecologists (ACOG)</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Hosting copies of immunization schedules and contraceptive use guidance from the CDC.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://archive.org/details/20250128-cdc-datasets" target="_blank" rel="noopener noreferrer" className="hover:underline">CDC Datasets on Internet Archive</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                CDC datasets uploaded before January 28th, 2025.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://archive.org/details/cchhl_2025-02-10" target="_blank" rel="noopener noreferrer" className="hover:underline">Climate Change and Human Health Literature Portal (CCHHL)</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Bibliographic information about 22,695 research items compiled by the National Institute of Environmental Health Sciences (NIEHS) for its Climate Change and Human Health Literature Portal. Internet Archive.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://covid.govarchive.us/" target="_blank" rel="noopener noreferrer" className="hover:underline">COVID.gov</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                An archived version of COVID.gov as of April 11, 2025. Archived by Webrecorder who collaborated with Safeguarding Research and Culture (SRC).
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://github.com/UW-CALMA/datarescue" target="_blank" rel="noopener noreferrer" className="hover:underline">Data Rescues 2025</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                In response to political threats to social, environmental, health, and personal data, the University of Washington Center for Advances in Libraries, Museums, and Archives (CALMA) is hosting a series of DATA RESCUE efforts.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://dataverse.harvard.edu/dataverse/cafe-extracted-data" target="_blank" rel="noopener noreferrer" className="hover:underline">Dataverse (CAFE)</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Data uploaded by the Climate Change and Health Research Coordinating Center (CAFE). Includes CDC's Social Vulnerability Index data. Most content focuses on health and environment data. Harvard College.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://infoepi.substack.com/p/cdc-clone-site-rife-with-false-vaccine#footnote-1-159585655" target="_blank" rel="noopener noreferrer" className="hover:underline">FAKE - CDC Clone Site (Warning)</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Warning about a CDC clone site with false vaccine claims hosted by an NGO once led by the current HHS Secretary. With CDC logos, real social media links, and a near-identical design, it may violate federal laws. Substack of InfoEPI Lab.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://findlostdata.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">Find Lost Data</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                This search tool provides links for data that have been downloaded from federal, state, and local agencies. Boston University School of Public Health.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://emails.illinois.edu/newsletter/02/615978402.html" target="_blank" rel="noopener noreferrer" className="hover:underline">Healthy Regions & Policies (HeRoP) Lab</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Preserved datasets and guidances include: The Center for Disease Control (CDC), The Environmental Protection Agency (EPA), and The Health Resources and Services Administration (HRSA). Available via Box.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.internationalgenome.org/data" target="_blank" rel="noopener noreferrer" className="hover:underline">National Center for Biotechnology Information (NCBI)</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                The 1000 Genomes Project is mirrored in The International Genome Sample Resource (IGSR). European Molecular Biology Laboratory-European Bioinformatics Institute (EMBL-EBI). Provides open access.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://git.lsit.ucsb.edu/publicdata" target="_blank" rel="noopener noreferrer" className="hover:underline">PublicData - UC Santa Barbara</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Mirrored and archived public data on locally hosted git server. Includes retrieved data sets from CDC, DoE, NIH, and NOAA.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.justice.gov/archives/reproductive-rights" target="_blank" rel="noopener noreferrer" className="hover:underline">Reproductive Rights Archive</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Archived content from the U.S. Department of Justice website.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://docs.proton.me/doc?mode=open-url&token=GHMVVTD81G&linkId=ZhJBCDRbxCQscDVmoKAMEZ9JntkWtJSYrekq90lsjXYRUdiM_YRauUtKe9QfJmU1sdPgIT04fTfalHqLPN4ujA%3D%3D#ZgSAWFWQMvT4" target="_blank" rel="noopener noreferrer" className="hover:underline">Resources and Links</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Various individuals and organizations have worked to archive/save data from the NIH, CDC, and other websites. This page lists many of those entities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.restoredcdc.org/www.cdc.gov/" target="_blank" rel="noopener noreferrer" className="hover:underline">RestoredCDC.org</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                A project rebuilding links between archived CDC pages to create a navigable site that provides the same information and user experience as the previous CDC website.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datalumos.org/datalumos/search/studies?start=0&ARCHIVE=datalumos&sort=score%20desc%2CDATEUPDATED%20desc&rows=25&q=SAMSHA" target="_blank" rel="noopener noreferrer" className="hover:underline">SAMSHA</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Direct link to Substance Abuse and Mental Health Administration (SAMSHA) archived data in DataLumos.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.statnews.com/2025/02/14/tracking-cdc-data-changes-trump-executive-order-targets-gender/" target="_blank" rel="noopener noreferrer" className="hover:underline">STAT News</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Maintains an ongoing blog post that monitors and documents the changes in CDC data. STAT also has begun an effort to download and archive all available files from data.cdc.gov.
              </p>
            </div>
          </>
        )}
        {(activeCategory === null || activeCategory === 'museums-and-libraries') && renderSection(
          'museums-and-libraries',
          'Museums and Libraries',
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datalumos.org/datalumos/search/studies?q=IMLS" target="_blank" rel="noopener noreferrer" className="hover:underline">IMLS data sets on DataLumos</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Institute of Museum and Library Services datasets preserved by the Inter-university Consortium for Political and Social Research (ICPSR).
              </p>
            </div>
          </>
        )}
        {(activeCategory === null || activeCategory === 'usaid') && renderSection(
          'usaid',
          'USAID',
          <>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.openicpsr.org/openicpsr/project/220041/version/V1/view" target="_blank" rel="noopener noreferrer" className="hover:underline">DHS API data rescue</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Data were retrieved from the DHS Program indicator data API for years 1985-2023. openICPSR.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datalumos.org/datalumos/project/224462/version/V1/view" target="_blank" rel="noopener noreferrer" className="hover:underline">DHS Indicator Data</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Summary data for countries, country subdivisions, and demographic categories from USAID's Demographic Health Survey (DHS). Almost 2,000 indicators capture information related to: fertility, family planning, maternal and child health, gender, HIV/AIDS, literacy, malaria, nutrition, and sanitation. DataLumos.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.datalumos.org/datalumos/project/224321/version/V1/view" target="_blank" rel="noopener noreferrer" className="hover:underline">DHS Spatial Data Repository</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Data at the country and country sub-division levels that are part of USAID's Demographic Health Survey (DHS). This collection includes geographically-linked health and demographic data from the DHS Program and the U.S. Census Bureau for mapping in a geographic information system (GIS). The data includes indicators related to: fertility, family planning, maternal and child health, gender, HIV/AIDS, literacy, malaria, nutrition, and sanitation. DataLumos.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://www.openicpsr.org/openicpsr/project/220227/version/V1/view" target="_blank" rel="noopener noreferrer" className="hover:underline">US Foreign Assistance</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                State Department and USAID data retrieved from ForeignAssistance.gov. ICPSR.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700">
                <a href="https://archive.org/details/usaid-documents" target="_blank" rel="noopener noreferrer" className="hover:underline">USAID Documents Mirror</a>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Over 3,000 documents from the United States Agency for International Development (USAID). Internet Archive.
              </p>
            </div>
          </>
        )}
      </div>
      {/* Source attribution */}
      <div className="mt-6 text-left">
        <span className="text-sm italic text-gray-500">
          Inspired by: <a href="https://libguides.umn.edu/c.php?g=1449575&p=10778647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">University of Minnesota Libraries</a>
        </span>
      </div>
    </div>
  );
};

export default DataRescueResources; 