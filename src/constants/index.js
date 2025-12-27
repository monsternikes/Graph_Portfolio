import { Network } from 'vis-network';
import { DataSet } from 'vis-data';

const NOTE_FONT_COLOR = '#ffffff';

const nodes = new DataSet([
  { id: 1, 
    label: 'Your Name', 
    color: '#7c3aed', 
    size: 40, 
    font: { size: 24, color: NOTE_FONT_COLOR } 
  },
  { id: 2, 
    label: 'Theatre', 
    color: '#ec4899', 
    size: 25, 
    font: { color: NOTE_FONT_COLOR } 
  },
  { id: 3, 
    label: 'Coding', 
    color: '#3b82f6', 
    size: 25, 
    font: { color: NOTE_FONT_COLOR } 
  },
  { id: 4, 
    label: 'Photography', 
    color: '#10b981', 
    size: 25, 
    font: { color: NOTE_FONT_COLOR } 
  },
  { id: 5, 
    label: 'Writing', 
    color: '#f59e0b', 
    size: 25, 
    font: { color: NOTE_FONT_COLOR } 
  },
  { id: 6, 
    label: 'Music', 
    color: '#ef4444', 
    size: 25, 
    font: { color: NOTE_FONT_COLOR } 
  },
  { id: 7, 
    label: 'Design', 
    color: '#06b6d4', 
    size: 25, 
    font: { color: NOTE_FONT_COLOR } 
  }
]);

const EDGE_COLOR = '#4a5568';
const DEFAULT_EDGE_OPACITY = 0.6;

const edges = new DataSet([
  { from: 1, to: 2, color: { color: EDGE_COLOR, opacity: DEFAULT_EDGE_OPACITY } },
  { from: 1, to: 3, color: { color: EDGE_COLOR, opacity: DEFAULT_EDGE_OPACITY } },
  { from: 1, to: 4, color: { color: EDGE_COLOR, opacity: DEFAULT_EDGE_OPACITY } },
  { from: 1, to: 5, color: { color: EDGE_COLOR, opacity: DEFAULT_EDGE_OPACITY } },
  { from: 1, to: 6, color: { color: EDGE_COLOR, opacity: DEFAULT_EDGE_OPACITY } },
  { from: 1, to: 7, color: { color: EDGE_COLOR, opacity: DEFAULT_EDGE_OPACITY } }
]);

const options = {
  nodes: {
    shape: 'dot',
    borderWidth: 2,
    borderWidthSelected: 3,
    font: {
      size: 16,
      bold: {
        color: '#ffffff'
      }
    }
  },
  edges: {
    width: 2,
    smooth: {
      type: 'continuous'
    }
  },
  physics: {
    enabled: true,
    stabilization: { 
      enabled: false,
    },

    //keeps physics "alive" longer
    minVelocity: 0.02,

    barnesHut: {
      gravitationalConstant: -10000,
      centralGravity: 0.15,
      springLength: 200,
      springConstant: 0.025,
      damping: 0.55,
      avoidOverlap: 0.1,
    }
  },
  interaction: {
    hover: true,
    tooltipDelay: 200,
    zoomView: true,
    dragView: true,
    dragNodes: true
  }
};

export {
  nodes,
  edges,
  options,
}