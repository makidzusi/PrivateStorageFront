import FileDTO from './FileDTO';

export default interface Directory {
    id: string,
    title: string,
    children: Array<FileDTO | Directory> | null,
    parentId: string | null,
    path: string,
    isStarred: boolean,
    createdAt: number,
    modifiedAt: number,
    authorId: string,
    isDir: boolean,
}