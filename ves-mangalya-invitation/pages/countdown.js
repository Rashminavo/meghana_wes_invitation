import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

// 👉 Change this to your actual event date and time.
const EVENT_DATE = '2026-08-01T07:00:00+05:30';

function getTimeLeft() {
  const diff = Math.max(new Date(EVENT_DATE).getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  const calendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' +
    encodeURIComponent('වෙස් තැබීමේ උත්සවය') +
    '&dates=20260801T013000Z/20260801T040000Z&details=' +
    encodeURIComponent('වෙස් තැබීමේ උත්සවය සඳහා ආරාධනා කර ඇත.') +
    '&location=' +
    encodeURIComponent('සිංහපුර ශ්‍රී විජයානන්ද විහාරය');

  return (
    <Layout title="කාල ගණනය">
      <span className="eyebrow">තවත් ඉතිරිව ඇත්තේ</span>
      <h2 className="title">මංගල මොහොත වන තුරු</h2>
      <Divider />

      <div className="cd-grid">
        <div className="cd-box">
          <div className="num">{time ? pad(time.days) : '--'}</div>
          <div className="lbl">දින</div>
        </div>
        <div className="cd-box">
          <div className="num">{time ? pad(time.hours) : '--'}</div>
          <div className="lbl">පැය</div>
        </div>
        <div className="cd-box">
          <div className="num">{time ? pad(time.minutes) : '--'}</div>
          <div className="lbl">මිනිත්තු</div>
        </div>
        <div className="cd-box">
          <div className="num">{time ? pad(time.seconds) : '--'}</div>
          <div className="lbl">තත්පර</div>
        </div>
      </div>

      <div className="cta-row">
        <a className="btn solid" href={calendarUrl} target="_blank" rel="noreferrer">
          📅 දිනදර්ශනයට එකතු කරන්න
        </a>
      </div>

      <p style={{ textAlign: 'center', marginTop: 30, color: 'var(--ink-soft)', fontSize: '0.9rem' }}>
        උත්සවය: 2026 අගෝස්තු 01 වන දින, පෙ.ව. 7.00
      </p>
    </Layout>
  );
}
