import { cookies } from 'next/headers';
import { nextServer } from './api';
import { User } from '@/types/user';
import { Note, NoteTag } from '@/types/note';
import { NotesHttpResponse } from './clientApi';

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const res = await nextServer.get('/auth/session', {
    headers: {

      Cookie: cookieStore.toString(),
    },
  });
  return res;
};

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get('/users/me', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {

  const cookieStore = await cookies();
  const { data } = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
   return data;
}

export const getNotesByQuery = async (
  search?: string,
  page?: number,
  tag?: NoteTag
): Promise<NotesHttpResponse> => {
  const cookieStore = await cookies();

  const { data } = await nextServer.get<NotesHttpResponse>(
    "/notes",
    {
      params: { search, page, tag },
      headers: {
        Cookie: cookieStore.toString(),
      },
    }
  );

  return data;
};