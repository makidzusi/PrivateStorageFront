export default interface File {
    id: string,
    title: string,
    isStarred: boolean,
    authorId: string,
    size: number,
    createdAt: number,
    modifiedAt: number,
    parentId: string,
    isDir: boolean,
}