export interface FileSystemItem {
  id: string;
  name: string;
  isFolder: boolean;
  children?: FileSystemItem[];
}
