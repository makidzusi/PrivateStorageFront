import Directory from "@/contracts/DirectoryDTO";

const getFolderByPathAsync = (_path: string): Promise<Directory> => {
  return new Promise<Directory>((resolve, reject) => {
    const dir = dirs.find((_el) => _el.path === _path);
    if (dir) {
      resolve(dir);
    } else {
      reject("Not found");
    }
  });
};
const getFolderByIdAsync = (_id: string): Promise<Directory> => {
  return new Promise<Directory>((resolve, reject) => {
    const dir = dirs.find((_el) => _el.id === _id);
    if (dir) {
      resolve(dir);
    } else {
      reject("Not found");
    }
  });
};

export { getFolderByPathAsync, getFolderByIdAsync };
const now = new Date().getTime();

const dirs: Directory[] = [
  {
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
        id: "1sdfsdfsdf",
        title: "Pepepga",
        parentId: null,
        path: "/papka/pepga",
        modifiedAt: now,
        createdAt: now,
        authorId: "user",
        isStarred: false,
        isDir: true,
        children: null,
      },
    ],
  },
  {
    id: "1sdfsdfsdf",
    title: "Pepepga",
    parentId: null,
    path: "/papka/pepga",
    modifiedAt: now,
    createdAt: now,
    authorId: "user",
    isStarred: false,
    isDir: true,
    children: [
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
    ],
  },
];
