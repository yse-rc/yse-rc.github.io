import { useMediaQuery } from 'react-responsive';
import { ReactFlow, Background, Controls, Handle, Position, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState, useRef, useCallback, useEffect } from 'react';

// Custom styles for ReactFlow controls
const controlButtonStyle = {
  backgroundColor: '#f1f5f9',
  color: '#000',
  border: '1px solid #cbd5e1',
  borderRadius: '4px',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#e2e8f0',
  },
};

// Icons for different node types
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3b82f6" viewBox="0 0 16 16" className="opacity-90">
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
);

const QuestionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8b5cf6" viewBox="0 0 16 16" className="opacity-90">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
  </svg>
);

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 16 16" className="opacity-90">
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ef4444" viewBox="0 0 16 16" className="opacity-90">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
);

const stepLabels = {
  '1': 'Confirm the Data Has Been Removed',
  '2': 'Check for a snapshot on Internet Archive',
  '3': 'Check the Data Rescue Tracker',
  '4': 'Contact for Data Rescue Help',
  'atRisk': 'Is Data At-Risk?',
  'needHelp': 'Need help retrieving?',
};

const explanations = {
  '1': (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 leading-relaxed">
        Before proceeding, verify that the data is actually missing by checking official sources:
      </p>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1.5">
        <li>Search <a href="https://data.gov" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">Data.gov</a></li>
        <li>Check the agency's current website</li>
        <li>Verify the data URL is no longer functioning</li>
      </ul>
      <p className="text-sm text-gray-600 italic">If the data is confirmed missing, proceed to the next step.</p>
    </div>
  ),
  '2': (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 leading-relaxed">
        The Internet Archive's Wayback Machine captures snapshots of websites over time:
      </p>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1.5">
        <li>Visit <a href="https://web.archive.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">Wayback Machine</a></li>
        <li>Try <a href="https://eotarchive.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">End of Term Archive</a> for government web snapshots</li>
      </ul>
      <p className="text-sm text-gray-600 italic">If you can't find the data in these archives, continue to the next step.</p>
    </div>
  ),
  '3': (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 leading-relaxed">
        The Data Rescue Tracker catalogs rescued datasets and their locations:
      </p>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1.5">
        <li>Search for your dataset in the <a href="https://baserow.datarescueproject.org/public/grid/Nt_M6errAkVRIc3NZmdM8wcl74n9tFKaDLrr831kIn4" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">Data Rescue Tracker</a></li>
        <li>Check if it has been archived by rescue initiatives</li>
      </ul>
      <p className="text-sm text-gray-600 italic">If you find the dataset but need help retrieving it, select "Yes." If you can't find it at all, select "No."</p>
    </div>
  ),
  '4': (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 leading-relaxed">
        Get help from the Yale School of Environment:
      </p>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1.5">
        <li>Email <a href="mailto:yse-rc@yale.edu" className="text-indigo-600 hover:text-indigo-800 transition-colors">yse-rc@yale.edu</a></li>
        <li>Or contact your School Library</li>
      </ul>
      <p className="text-sm text-gray-600 italic">Provide details about the dataset you're looking for and what steps you've already taken.</p>
    </div>
  ),
  'atRisk': (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 leading-relaxed">
        If the data still exists but you believe it may be removed in the future:
      </p>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1.5">
        <li>Archive a copy for preservation locally</li>
        <li>Nominate to <a href="https://docs.google.com/forms/d/e/1FAIpQLScbXHFShnkNr8JuIgn9ZYNRg8lcO5oMATLb1QaMKm7Ixb8BMg/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">Public Environmental Data Partners</a> for archival</li>
      </ul>
      <p className="text-sm text-gray-600 italic">Help preserve data by <a href="https://www.datarescueproject.org/getting-started-with-the-data-rescue-project/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">joining the Data Rescue Project</a></p>

    </div>
  ),
  'needHelp': (
    <div className="space-y-3">
      <p className="text-sm text-gray-600 leading-relaxed">
        If you've located the dataset in an archive but need assistance accessing or working with it:
      </p>
      <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1.5">
        <li>Help with data formats or transformation</li>
        <li>Support for accessing specialized archives</li>
      </ul>
      <p className="text-sm text-gray-600 italic">Contact our team for technical assistance with archived data.</p>
    </div>
  ),
};

// Custom node types with minimalist design
const nodeTypes = {
  step: ({ data, selected }) => (
    <div
      tabIndex={0}
      aria-label={data.label}
      className={`group bg-white border border-gray-200 rounded-md py-3 px-4 transition-shadow duration-300 flex items-center gap-3 ${selected ? 'shadow-md' : 'shadow-sm hover:shadow-md'}`}
      style={{ minWidth: 280 }}
    >
      <div className={`p-2 rounded-full ${data.iconBg || 'bg-gray-100'} flex-shrink-0`}>
        {data.icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wider text-gray-500 font-medium whitespace-nowrap">{data.step}</span>
        <span className="text-gray-800 font-medium">{data.label}</span>
      </div>
      {/* Top handle - for incoming connections */}
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white' }}
        isConnectable={false}
      />
      {/* Bottom handle - for outgoing vertical connections */}
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white' }}
        isConnectable={false}
      />
      {/* Left side - both source and target */}
      <Handle
        id="left-source"
        type="source"
        position={Position.Left}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white', top: '30%' }}
        isConnectable={false}
      />
      <Handle
        id="left-target"
        type="target"
        position={Position.Left}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white', top: '70%' }}
        isConnectable={false}
      />
      {/* Right side - both source and target */}
      <Handle
        id="right-source"
        type="source"
        position={Position.Right}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white', top: '30%' }}
        isConnectable={false}
      />
      <Handle
        id="right-target"
        type="target"
        position={Position.Right}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white', top: '70%' }}
        isConnectable={false}
      />
    </div>
  ),
  branch: ({ data, selected }) => (
    <div
      tabIndex={0}
      aria-label={data.label}
      className={`group bg-gray-50 border border-gray-200 rounded-md py-3 px-4 transition-shadow duration-300 flex items-center gap-3 ${selected ? 'shadow-md' : 'shadow-sm hover:shadow-md'}`}
      style={{ minWidth: 220 }}
    >
      <div className="p-2 rounded-full bg-purple-100 flex-shrink-0">
        <QuestionIcon />
      </div>
      <span className="text-gray-700 font-medium">{data.label}</span>
      <Handle
        id="top"
        type="target"
        position={Position.Top}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white' }}
        isConnectable={false}
      />
      <Handle
        id="bottom"
        type="source"
        position={Position.Bottom}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white' }}
        isConnectable={false}
      />
      <Handle
        id="left-source"
        type="source"
        position={Position.Left}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white', top: '30%' }}
        isConnectable={false}
      />
      <Handle
        id="left-target"
        type="target"
        position={Position.Left}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white', top: '70%' }}
        isConnectable={false}
      />
      <Handle
        id="right"
        type="target"
        position={Position.Right}
        style={{ opacity: 1, background: '#94a3b8', width: 10, height: 10, border: '2px solid white' }}
        isConnectable={false}
      />
    </div>
  ),
};

const GovDataRescueWorkflow = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const flowRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState('1');
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // Create a vertical layout with improved edge visibility
  useEffect(() => {
    const baseY = 80;
    const stepHeight = 160; // Increased vertical spacing between main nodes (was 120)
    const nodeX = isMobile ? 120 : 200; // X position of main workflow nodes
    const branchOffset = isMobile ? 220 : 280; // How far branches are positioned from main flow (was 180/220)

    const newNodes = [
      {
        id: '1',
        type: 'step',
        position: { x: nodeX, y: baseY },
        data: {
          label: 'Confirm Data Is Removed',
          step: 'Step 1',
          icon: <SearchIcon />,
          iconBg: 'bg-red-100'
        }
      },
      {
        id: '2',
        type: 'step',
        position: { x: nodeX, y: baseY + stepHeight },
        data: {
          label: 'Check Internet Archive',
          step: 'Step 2',
          icon: <ArrowRightIcon />,
          iconBg: 'bg-blue-100'
        }
      },
      {
        id: '3',
        type: 'step',
        position: { x: nodeX, y: baseY + stepHeight * 2 },
        data: {
          label: 'Check Data Rescue Tracker',
          step: 'Step 3',
          icon: <ArrowRightIcon />,
          iconBg: 'bg-blue-100'
        }
      },
      {
        id: '4',
        type: 'step',
        position: { x: nodeX, y: baseY + stepHeight * 3 },
        data: {
          label: 'Contact for Data Rescue Help',
          step: 'Step 4',
          icon: <ContactIcon />,
          iconBg: 'bg-green-100'
        }
      },
      {
        id: 'atRisk',
        type: 'branch',
        position: { x: nodeX - branchOffset, y: baseY + stepHeight * 0.5 },
        data: { label: 'Is Data At-Risk?' }
      },
      {
        id: 'needHelp',
        type: 'branch',
        position: { x: nodeX + branchOffset, y: baseY + stepHeight * 2.5 },
        data: { label: 'Need Help Retrieving?' }
      }
    ];

    // Edge styling for maximum visibility
    const edgeBaseStyle = {
      stroke: '#64748b', // slate-500
      strokeWidth: 1.5,
      strokeLinecap: 'round',
    };

    const newEdges = [
      // Main flow - vertical connections
      {
        id: 'e1-2',
        source: '1',
        target: '2',
        sourceHandle: 'bottom',
        targetHandle: 'top',
        type: 'straight',
        animated: false, 
        style: edgeBaseStyle,
        markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16, color: '#64748b' },
        label: 'Yes',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: '#334155', fontSize: 12, fontWeight: 600 },
        labelBgStyle: { fill: '#f8fafc', stroke: '#e2e8f0', strokeWidth: 1 },
        labelShowBg: true
      },
      {
        id: 'e2-3',
        source: '2',
        target: '3',
        sourceHandle: 'bottom',
        targetHandle: 'top',
        type: 'smoothstep',
        animated: false,
        style: edgeBaseStyle,
        markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16, color: '#64748b' }
      },
      {
        id: 'e3-4',
        source: '3',
        target: '4',
        sourceHandle: 'bottom',
        targetHandle: 'top',
        type: 'smoothstep',
        animated: false,
        style: edgeBaseStyle,
        markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16, color: '#64748b' },
        label: 'No',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: '#334155', fontSize: 12, fontWeight: 600 },
        labelBgStyle: { fill: '#f8fafc', stroke: '#e2e8f0', strokeWidth: 1 },
        labelShowBg: true
      },
      // Branch connections
      {
        id: 'e1-atRisk',
        source: '1',
        target: 'atRisk',
        sourceHandle: 'left-source',
        targetHandle: 'top',
        type: 'smoothstep',
        animated: false,
        style: edgeBaseStyle,
        markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16, color: '#64748b' },
        label: 'No',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: '#334155', fontSize: 12, fontWeight: 600 },
        labelBgStyle: { fill: '#f8fafc', stroke: '#e2e8f0', strokeWidth: 1 },
        labelShowBg: true
      },
      {
        id: 'eAtRisk-4',
        source: 'atRisk',
        target: '4',
        sourceHandle: 'bottom',
        targetHandle: 'left-target',
        type: 'smoothstep', 
        animated: false,
        style: edgeBaseStyle,
        markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16, color: '#64748b' }
      },
      {
        id: 'e3-needHelp',
        source: '3',
        target: 'needHelp',
        sourceHandle: 'right-source',
        targetHandle: 'top',
        type: 'smoothstep',
        animated: false,
        style: edgeBaseStyle,
        markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16, color: '#64748b' },
        label: 'Yes',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: '#334155', fontSize: 12, fontWeight: 600 },
        labelBgStyle: { fill: '#f8fafc', stroke: '#e2e8f0', strokeWidth: 1 },
        labelShowBg: true
      },
      {
        id: 'eNeedHelp-4',
        source: 'needHelp',
        target: '4',
        sourceHandle: 'bottom',
        targetHandle: 'right-target',
        type: 'smoothstep',
        animated: false,
        style: edgeBaseStyle,
        markerEnd: { type: MarkerType.ArrowClosed, width: 16, height: 16, color: '#64748b' }
      }
    ];

    setNodes(newNodes);
    setEdges(newEdges);
  }, [isMobile]);

  const handleNodeClick = useCallback((_, node) => {
    setSelectedNode(node.id);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      {/* Custom styles for ReactFlow controls */}
      <style>
        {`
          .react-flow__controls button {
            background-color: #f1f5f9;
            color: #000;
            fill: #000 !important;
            stroke: #000 !important;
          }
          .react-flow__controls button:hover {
            background-color: #e2e8f0;
          }
          .react-flow__controls button svg {
            fill: #000;
            stroke: #000;
          }
        `}
      </style>
      
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 text-center">
        How to Find and Retrieve Government Data
      </h2>
      
      <div className={`flex flex-col ${isMobile ? 'space-y-6' : 'lg:flex-row lg:space-x-6'}`}>
        {/* Flow diagram */}
        <div 
          className={`w-full ${isMobile ? 'h-[550px]' : 'lg:w-2/3 h-[550px]'} border border-gray-100 rounded-lg bg-gray-50 shadow-inner overflow-hidden`}
          ref={flowRef}
        >
          <ReactFlow
            nodes={nodes.map(node => ({
              ...node,
              selected: node.id === selectedNode
            }))}
            edges={edges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.2, includeHiddenNodes: true }}
            minZoom={0.5}
            maxZoom={2}
            onNodeClick={handleNodeClick}
            className="w-full h-full"
            attributionPosition="bottom-right"
            panOnDrag={true}
            zoomOnScroll={true}
            zoomOnPinch={true}
            proOptions={{ hideAttribution: true }}
            defaultEdgeOptions={{
              type: 'smoothstep',
              style: { stroke: '#64748b', strokeWidth: 1.5 }
            }}
          >
            <Background gap={16} color="#f3f4f6" variant="dots" />
            <Controls 
              position="bottom-right" 
              showInteractive={false}
              style={{ 
                display: 'flex',
                flexDirection: 'row',
                gap: '4px',
              }}
              className="react-flow__controls-dark"
            />
          </ReactFlow>
        </div>
        
        {/* Step details */}
        <div className={`w-full ${isMobile ? '' : 'lg:w-1/3'} bg-white rounded-lg border border-gray-200 p-4 shadow-sm`}>
          {selectedNode && (
            <>
              <h3 className="text-gray-700 font-medium pb-2 mb-3 border-b border-gray-100 flex items-center gap-2">
                {selectedNode === 'atRisk' || selectedNode === 'needHelp' ? (
                  <QuestionIcon />
                ) : (
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {selectedNode === '1' ? 'Step 1' : 
                     selectedNode === '2' ? 'Step 2' : 
                     selectedNode === '3' ? 'Step 3' : 'Step 4'}
                  </span>
                )}
                <span>{stepLabels[selectedNode]}</span>
              </h3>
              <div className="text-gray-600 text-sm">
                {explanations[selectedNode]}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default GovDataRescueWorkflow; 