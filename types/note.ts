export interface Note {
    id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    tag: string
}
export enum NoteTag {
  all = '',
  Work = "Work",
  Meeting = "Meeting",
  Personal = "Personal",
  Shopping = "Shopping",
  Todo = "Todo",
}

export type NewNote = Omit<Note, "id" | "createdAt" | "updatedAt">;