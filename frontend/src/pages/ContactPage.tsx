import { FormEvent, useState } from 'react';
import { sendContactMessage } from '../api/client';
import PageHeader from '../components/PageHeader';
import type { ContactPayload, Profile } from '../types';

type Props = {
  profile: Profile | null;
};

const initialForm: ContactPayload = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function ContactPage({ profile }: Props) {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setFeedback('');

    try {
      const response = await sendContactMessage(form);
      setStatus('success');
      setFeedback(response.message);
      setForm(initialForm);
    } catch {
      setStatus('error');
      setFeedback('Message was not saved. Check that Django is running on port 8000.');
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s connect about software engineering, backend systems, or AI platform work."
        description="This form posts to the Django backend and stores messages in the database/admin panel."
      />

      <section className="content-section contact-layout">
        <div className="panel-card">
          <h2>Contact details</h2>
          <div className="contact-list">
            <a href={`mailto:${profile?.email ?? 'anveshdantuluri@gmail.com'}`}>{profile?.email ?? 'anveshdantuluri@gmail.com'}</a>
            <span>{profile?.phone ?? '+1 (201) 640-9986'}</span>
            <span>{profile?.location ?? 'Edison, NJ'}</span>
            {profile?.linkedin_url && (
              <a href={profile.linkedin_url} target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            )}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Subject
            <input
              value={form.subject}
              onChange={(event) => setForm({ ...form, subject: event.target.value })}
              placeholder="Opportunity / project / question"
              required
            />
          </label>
          <label>
            Message
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder="Write your message here..."
              rows={6}
              required
            />
          </label>
          <button className="primary-button" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {feedback && <p className={`form-feedback ${status}`}>{feedback}</p>}
        </form>
      </section>
    </>
  );
}

export default ContactPage;
