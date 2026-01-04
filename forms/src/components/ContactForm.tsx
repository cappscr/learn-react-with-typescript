'use client';
import { useActionState } from 'react';
import { insertContact } from '@/data/insertContact';

export function ContactForm() {
  const [{ ok, error, formData }, formAction, isPending] = useActionState(insertContact, {
    ok: false,
    error: '',
    formData: new FormData(),
  });
  return (
    <form action={formAction}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={(formData.get('name') ?? '') as string}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Your email address</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={(formData.get('email') ?? '') as string}
        />
      </div>
      <div className="field">
        <label htmlFor="reason">Reason you need to contact us</label>
        <select id="reason" name="reason" defaultValue={(formData.get('reason') ?? '') as string}>
          <option value=""></option>
          <option value="Support">Support</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="notes">Additional notes</label>
        <textarea id="notes" name="notes" defaultValue={(formData.get('notes') ?? '') as string} />
      </div>
      {!ok && (
        <p role="alert" className="error">
          {error}
        </p>
      )}
      {isPending && <p role="alert">Saving ...</p>}
      <button type="submit" disabled={isPending}>
        Submit
      </button>
    </form>
  );
}
