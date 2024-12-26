import React, { useRef, useEffect } from 'react';
import { Network } from 'vis-network/peer';

const Graph = ({ nodes, edges }) => {
  const containerRef = useRef(null);
  const networkRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Graph data and options
    const data = { nodes, edges };
    const options = {
      nodes: {
        shape: 'dot',
        size: 15,
        color: '#FF5733',
        font: { color: '#FFFFFF' },
      },
      edges: {
        color: '#000000',
        width: 2,
      },
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -2000,
          centralGravity: 0.3,
          springLength: 200,
          springConstant: 0.04,
        },
      },
      manipulation: {
        enabled: true,
      },
    };

    // Initialize the network
    networkRef.current = new Network(containerRef.current, data, options);

    // Handle window resize event
    const handleResize = () => {
      if (containerRef.current && networkRef.current) {
        networkRef.current.setSize(
          containerRef.current.offsetWidth,
          containerRef.current.offsetHeight
        );
        networkRef.current.redraw();
      }
    };

    // Add the event listener
    window.addEventListener('resize', handleResize);

    // Initial resize to fit the container
    handleResize();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (networkRef.current) {
        networkRef.current.destroy();
        networkRef.current = null;
      }
    };
  }, [nodes, edges]);

  return <div ref={containerRef} style={{ height: '100%', width: '100%' }} />;
};

export default Graph;
