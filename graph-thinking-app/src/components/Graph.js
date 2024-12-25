// components/Graph.js
import React, { useRef, useEffect, useState } from 'react';
import { Network } from 'vis-network/peer';

const Graph = ({ nodes, edges }) => {
  const containerRef = useRef(null);
  const networkRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    console.log('Nodes or edges updated:', nodes, edges);
    if (containerRef.current) {
      console.log('Data being passed to Network:', { nodes, edges });
      const data = { nodes, edges };
      const options = {
        nodes: {
          shape: 'dot',
          size: 15,
          color: '#FF5733',
          font: {
            color: '#FFFFFF',
          },
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

      networkRef.current = new Network(containerRef.current, data, options);

      const resizeObserver = new ResizeObserver(() => {
        const { offsetWidth, offsetHeight } = containerRef.current;
        if (size.width !== offsetWidth || size.height !== offsetHeight) {
          setSize({ width: offsetWidth, height: offsetHeight });
          networkRef.current.redraw();
        }
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [nodes, edges, size]);

  return <div ref={containerRef} style={{ height: '100%', width: '100%' }} />;
};

export default Graph;
