'use server';

import { createClient, type Client } from '@libsql/client';
import { redirect } from 'next/navigation';
import { contactSchema } from './schema';

type ActionState = {
  ok: boolean;
  error: string;
  formData: FormData;
};

export async function insertContact(previousState: ActionState, formData: FormData) {
  const parsedResult = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsedResult.success) {
    return {
      ok: false,
      error: 'Unable to save - invalid field values',
      formData,
    };
  }
  const { name, email, reason, notes } = parsedResult.data;

  let client: Client | undefined;
  let ok = true;
  let error = '';

  try {
    client = createClient({
      url: process.env.DB_URL ?? '',
    });
    await client.execute({
      sql: 'INSERT INTO contact(name, email, reason, notes) VALUES (?, ?, ?, ?)',
      args: [name, email, reason, notes ?? null],
    });
  } catch {
    ok = false;
    error = 'Problem saving form';
  }
  if (client) {
    client.close();
  }
  if (ok) {
    redirect(`/thanks?name=${encodeURIComponent(name)}`);
  }
  return { ok, error, formData };
}
