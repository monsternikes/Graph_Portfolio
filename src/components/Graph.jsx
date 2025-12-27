import React, { useEffect, useRef} from 'react'
import { nodes, edges, options } from '#constants/index.js';
import { Network } from 'vis-network';
import 'vis-network/styles/vis-network.css';

const Graph = () => {
  const networkContainer = useRef(null);
  const networkInstance = useRef(null);

  useEffect(() => {
    if(!networkContainer.current) return;

    // In React StrictMode (dev), effects run twice; destroy before re-creating
    if (networkInstance.current) {
      networkInstance.current.destroy();
      networkInstance.current = null;
    }

    const data = { nodes: nodes, edges: edges };

    networkInstance.current = new Network(networkContainer.current, data, options);

    //Add click event to nodes
    networkInstance.current.on("click", (params) => {
      if (params.nodes.length > 0){
        const nodeId = params.nodes[0];
        const node = nodes.get(nodeId);
        console.log('Clicked on: ', node.label);
      }
    });

    nodes.update({ id: 1, fixed: { x: true, y: true } });

    return() => {
      // Cleanup: destroy network instance when component unmounts
      networkInstance.current.destroy();
      networkInstance.current = null;
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-900 relative overflow-hidden">
      <div ref={networkContainer} className="w-full h-full" />
    </div>
  );
};

export default Graph;