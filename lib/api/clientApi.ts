import { NewNote, Note } from "@/types/note";
import Axios from "axios";

export enum NoteTag {
  all = '',
  Work = "Work",
  Meeting = "Meeting",
  Personal = "Personal",
  Shopping = "Shopping",
  Todo = "Todo",
}

interface NotesHttpResponse {
  notes: Note[],
  totalPages: number,
}

const nextServer = Axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});

export async function getNotesByQuery(search?: string, page?: number, tag?:NoteTag): Promise<NotesHttpResponse>
{
  return  nextServer.get<NotesHttpResponse>("/notes" , { params: { search, page, tag } })
    .then((res) => res.data);
}

export function addNote(newNote: NewNote): Promise<Note> {
  return nextServer.post<Note>("/notes", newNote).then(res => res.data);
}

export function deleteNote(id: string): Promise<Note> {
  return nextServer.delete<Note>(`/notes/${id}`).then(res => res.data);
}

export function fetchNoteById(id: string): Promise<Note> {
  return nextServer.get<Note>(`/notes/${id}`).then(res => res.data)
}

export type RegisterRequest = {
  email: string;
  password: string;
  userName: string;
};

export type User = {
  id: string;
  email: string;
  username?: string;
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>('/auth/register', data);
  return res.data;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>('/auth/login', data);
  return res.data;
};


type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>('/auth/session');
  return res.data.success;
};
export const getMe = async () => {
  const { data } = await nextServer.get<User>('/users/me');
  return data;
};
export const logout = async (): Promise<void> => {
  await nextServer.post('/auth/logout')
};
export type UpdateUserRequest = {
  email:string,
  username?: string;
};

export const updateMe = async (update: UpdateUserRequest) => {
  const res = await nextServer.patch<User>('/users/me', update);
  return res.data;
};