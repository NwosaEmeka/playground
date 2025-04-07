import { useState } from "react";
import { FileSystemItem } from "../types";

interface Props {
  nodes: FileSystemItem[];
  addNewItem: (parentId: string) => void;
  deleteItem: (id: string) => void;
}
export const List = ({ nodes, addNewItem, deleteItem }: Props) => {
  const [isExpanded, setIsExpanded] = useState<Record<string, boolean>>({});

  return (
    <div className="list">
      {nodes.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev?.[node.name],
                }))
              }
            >
              {isExpanded?.[node.name] ? "-" : "+"}
            </span>
          )}
          <span>
            {node.name}
            {node.isFolder && (
              <span onClick={() => addNewItem(node.id)}>
                <img
                  src="https://www.svgrepo.com/show/165570/add-file.svg"
                  className="add-icon"
                />
              </span>
            )}
            <span onClick={() => deleteItem(node.id)}>
              <img
                src="https://www.svgrepo.com/show/21045/delete-button.svg"
                className="delete-icon"
              />
            </span>
          </span>
          {isExpanded?.[node.name] && node.children && (
            <List
              nodes={node.children}
              addNewItem={addNewItem}
              deleteItem={deleteItem}
            />
          )}
        </div>
      ))}
    </div>
  );
};
