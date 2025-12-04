import React from 'react';

const CloudComputing = () => {
  return (
    <div className="container">
      <h1>Cloud Computing</h1>
      
      <p>
        Cloud computing services provide flexible, on-demand access to computing resources. 
        These resources include servers, storage, and software, over the internet. For student 
        researchers and developers, this allows scalable tools for collaboration, data analysis, 
        and experimentation. It enables access to computational resources and systems from 
        anywhere and any time.
      </p>

      <h2>Yale Spinup</h2>
      <p>
        Spinup is the Cloud Computing Platform members of the Yale community. Its services 
        include virtual machines, containers, databases, storage, and static website support. 
        It also has a Slack community for support and networking.
      </p>
      <p>
        Login and access the Yale Spinup portal{' '}
        <a href="https://spinup.internal.yale.edu/" target="_blank" rel="noopener noreferrer">
          here
        </a>
        . For a quick start guide on Spinup, see{' '}
        <a 
          href="https://yaleits.atlassian.net/wiki/spaces/spinup/pages/4563009560/Spinup+Quick+Start+Guide" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          here
        </a>
        {' '}and see the FAQ for Spinup{' '}
        <a 
          href="https://yaleits.atlassian.net/wiki/spaces/spinup/overview?homepageId=470581620" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          here
        </a>
        . VPN is required for off-campus access.
      </p>

      <h2>AWS Research</h2>
      <p>
        Access AWS Services through Spinup. Charges may apply depending on type of service used.
      </p>
    </div>
  );
};

export default CloudComputing;
