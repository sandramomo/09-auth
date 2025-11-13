export interface Note {
    id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    tag: string
}
export type User = {
  id: string;
    email: string;
    avatar: string,
  userName?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type NewNote = Omit<Note, "id" | "createdAt" | "updatedAt">;