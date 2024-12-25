// components/Canvas.js
import React, { useState } from 'react';
import Graph from './Graph';

const Canvas = () => {
  // Sample nodes and edges
  const [nodes, setNodes] = useState([
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
  ]);
  
  const [edges, setEdges] = useState([
    { from: 1, to: 2 },
    { from: 2, to: 3 },
  ]);

  return (
    <main className="canvas">
      <h2>Graph Visualization Area</h2>
      <Graph nodes={nodes} edges={edges} />
    </main>
  );
};

export default Canvas;

