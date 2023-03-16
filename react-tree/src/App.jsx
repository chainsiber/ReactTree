import "react";
import {createContext, useState} from "react";
import Node from "./components/Node";
import { nodeList } from "./data/nodeList.js";
import NavBar from "./components/NavBar.jsx";
import "./App.css";
import {getParentById} from "./utils/getParentById.js";
import {getNewItemId} from "./utils/getNewItemId.js";
import getNodeById from "./utils/getNodeById.js";

export const TreeContext = createContext(null);

function App() {
  const [selectedId, setSelectedId] = useState(0)
  const [treeObj, setTreeObj] = useState({...nodeList})

  const handlers = {
    handleAdd: (nodeId) => {
      const newNode = {
        id: getNewItemId(),
        text: "simple text",
        children: [],
      };
      const nodeObject = getNodeById(treeObj, nodeId)
      nodeObject?.children?.push(newNode)
      setTreeObj({...treeObj})
    },

    handleRemove: () => {},
    handleEdit: () => {},
    handleReset: () => {},
  };

  const contextValue = {
    selectedId, setSelectedId,
    ...handlers
  };

  return (
    <div className="App">
      <TreeContext.Provider value={contextValue}>
        <NavBar />
        <Node nodes={treeObj} />
      </TreeContext.Provider>
    </div>
  );
}

export default App;
