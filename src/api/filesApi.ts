import Directory from "@/contracts/DirectoryDTO";

const getFolderByPathAsync = (_path: string): Promise<Directory> => {
  return new Promise<Directory>((resolve, reject) => {
    resolve(data);
  });
};
const getFolderByIdAsync = (): Promise<Directory> => {
  return new Promise<Directory>((resolve, reject) => {
    resolve(data);
  });
};

export { getFolderByPathAsync, getFolderByIdAsync };
const now = new Date().getTime();

const data: Directory = {
  id: "1adf1312",
  title: "Root",
  parentId: null,
  path: "/",
  modifiedAt: now,
  createdAt: now,
  authorId: "user",
  isStarred: false,
  isDir: true,
  children: [
    {
      id: "123ffasd",
      title: "file.jpg",
      isStarred: true,
      authorId: "user1",
      createdAt: now,
      modifiedAt: now,
      parentId: "1adf1312",
      size: 1000,
      isDir: false,
    },
    {
      id: "123ffaasdfadsd",
      title: "file.jpg",
      isStarred: true,
      authorId: "user1",
      createdAt: now,
      modifiedAt: now,
      parentId: "1adf1312",
      size: 1000,
      isDir: false,
    },
    {
      id: "123ffa123123sd",
      title: "file.jpg",
      isStarred: true,
      authorId: "user1",
      createdAt: now,
      modifiedAt: now,
      parentId: "1adf1312",
      size: 1000,
      isDir: false,
    },
    {
      id: "1adf13афываыф12",
      title: "Papka",
      parentId: null,
      path: "/papka",
      modifiedAt: now,
      createdAt: now,
      authorId: "user",
      isStarred: false,
      isDir: true,
      children: null,
    },
  ],
};

const dirs : Directory[] = [
    
]
