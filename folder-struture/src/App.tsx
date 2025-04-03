import { useState } from "react";
import json from "./data.json";
import { List } from "./components/List";
import { FileSystemItem } from "./types";
import "./App.css";

function App() {
  const [data, setData] = useState<FileSystemItem[]>(json);

  const addNewItem = (parentId: string) => {
    const name = prompt("Enter name");
    if (!name) return;

    const isFile = /\.\w+$/.test(name);

    const newItem = {
      id: crypto.randomUUID(),
      name,
      isFolder: !isFile,
      children: isFile ? undefined : [],
    };

    const updateData = (items: FileSystemItem[]): FileSystemItem[] => {
      return items.map((item) => {
        if (item.id === parentId) {
          return {
            ...item,
            children: [...(item.children || []), newItem],
          };
        }
        if (item.children) {
          return {
            ...item,
            children: updateData(item.children),
          };
        }
        return item;
      });
    };

    setData((prev) => updateData(prev));
  };

  const deleteItem = (id: string) => {
    const updateData = (items: FileSystemItem[]): FileSystemItem[] => {
      return items
        .filter((item) => item.id !== id)
        .map((item) => {
          if (item.children) {
            return {
              ...item,
              children: updateData(item.children),
            };
          }
          return item;
        });
    };

    setData((prev) => updateData(prev));
  };
  return (
    <div>
      <List nodes={data} addNewItem={addNewItem} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
