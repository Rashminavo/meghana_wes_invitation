import { useEffect, useState } from 'react';
import Image from 'next/image';
import Divider from './Divider';

const EVENT_DATE = '2026-12-30T07:00:00+05:00';
const STUDENTS = [
  { name: 'තෙනුර රිත්මල්',photo: '/student1.jpg' },
  { name: '‍යුකිත පෙත්සුක',photo: '/student2.jpg' },
  { name: 'පාරමී කාව්‍යා',photo: '/student3.jpg' },
  { name: 'ජනුදි ජයමුතුලි',photo: '/student4.jpg' },
  { name: 'හිරුෂි දිව්‍යාංජලී',photo: '/student5.jpg' },
  { name: 'ආදිත්‍යා ආකර්ෂා',photo: '/student6.jpg' },
  { name: 'ගෝවින්දි චාතුල්‍යා',photo: '/student7.jpg' },
  { name: 'දුලීෂී නිම්තරා',photo: '/student8.jpg' }
];
const AGENDA = [
  { time: 'පෙ.ව.5.00', title: 'හිස වෙස් හා පාහිම්පත් පැළදවීම'},
  { time: 'පෙ.ව.6.45', title: 'රංග භූමියට ප්‍රවිශ්ට වීම හා මගුල් බෙර වාදනය'},
  { time: 'පෙ.ව.7.00', title: 'යාතිකාව'},
  { time: 'පෙ.ව.7.30', title: 'ඡායාරූප ගැනීම'},
  { time: 'පෙ.ව.7.50', title: 'මංගලම් නර්තනය'},
  { time: 'පෙ.ව.8.30', title: 'තේවා පද නර්තනය'},
  { time: 'පෙ.ව.8.45', title: 'ආරාධිත ගුරු වන්දනාව'},
  { time: 'පෙ.ව.9.00', title: 'යක්ඇනුම නර්තනය'},
  { time: 'පෙ.ව.9.45', title: 'ප්‍රධාන ආරාධිත අමුත්තාගේ කතාව'},
  { time: 'පෙ.ව.10.00', title: 'කුවේණි අස්නය නර්තනය'},
  { time: 'පෙ.ව.10.30', title: 'උදයප්‍රිය කුමාර ගුරුතුමාගේ කතාව, අමිල ඉලුක්කුඹුර ගුරුතුමාගේ කතාව'},
  { title: 'මව්පිය වන්දනාව'},
  { title: 'ගුරු වන්දනාව'},
  { title: 'තේ පැන් සංග්‍රහය'}
];
const PHOTOS = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
  '/gallery7.jpg',
];
const MAPS_QUERY = 'Sri Thilakarama Viharaya, Madapatha Rd, Piliyandala';
const CONTACTS = [
  { name: '[චන්ද්‍රිකා ගුරුතුමිය]', role: 'නර්තන ගුරුවරයා', phone: '070 406 0715'},
  { name: '[චන්ද්‍රිකා ගුරුතුමිය]', role: 'නර්තන ගුරුවරයා', phone: '077 872 2044'},
];

function getTimeLeft() {
  const diff = Math.max(new Date(EVENT_DATE).getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function digitsOnly(str) {
  return str.replace(/\D/g, '');
}

function CountdownSection() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');
  const calendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' +
    encodeURIComponent('Ves Ceremony') +
    '&dates=20260801T013000Z/20260801T040000Z&details=' +
    encodeURIComponent('You are invited to the Ves Ceremony.') +
    '&location=' +
    encodeURIComponent(VENUE_NAME);

  return (
    <>
      <span className="eyebrow">Time remaining</span>
      <h2 className="title">Until the auspicious moment</h2>
      <Divider />
      <div className="cd-grid">
        <div className="cd-box"><div className="num">{time ? pad(time.days) : '--'}</div><div className="lbl">Days</div></div>
        <div className="cd-box"><div className="num">{time ? pad(time.hours) : '--'}</div><div className="lbl">Hours</div></div>
        <div className="cd-box"><div className="num">{time ? pad(time.minutes) : '--'}</div><div className="lbl">Minutes</div></div>
        <div className="cd-box"><div className="num">{time ? pad(time.seconds) : '--'}</div><div className="lbl">Seconds</div></div>
      </div>
      <div className="cta-row">
        <a className="btn solid" href={calendarUrl} target="_blank" rel="noreferrer">Add to calendar</a>
      </div>
    </>
  );
}

function StudentsSection() {
  return (
    <>
      <span className="eyebrow">Honoured this year</span>
      <h2 className="title">Students Receiving Ves</h2>
      <Divider />
      <div className="s-grid">
        {STUDENTS.map((s, i) => (
          <div className="s-card" key={i}>
            <div className="photo student-photo">
              <img src={s.photo} alt={s.name} />
            </div>
            <h3>{s.name}</h3>
            <div className="batch">{s.batch}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function AgendaSection() {
  return (
    <>
      <span className="eyebrow">න්‍යාය පත්‍රය</span>
      <h2 className="title">න්‍යාය පත්‍රය</h2>
      <Divider />
      <div className="timeline">
        {AGENDA.map((item, i) => (
          <div className="t-item" key={i}>
            <div className="t-icon">{i + 1}</div>
            <div className="t-body">
              <div className="time">{item.time}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function GallerySection() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <span className="eyebrow">මතක සටහන්</span>
      <h2 className="title">ගැලරිය</h2>
      <Divider />
      <div className="g-grid">
        {PHOTOS.map((src, i) => (
          <button key={src} className="gallery-tile" onClick={() => setOpen(i)} type="button">
            <Image src={src} alt={`Gallery photo ${i + 1}`} width={520} height={520} />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lightbox-photo" onClick={() => setOpen(null)} type="button">
            <Image src={PHOTOS[open]} alt={`Gallery photo ${open + 1}`} width={900} height={900} />
          </button>
        </div>
      )}
    </>
  );
}

function VenueSection() {
  return (
    <>
      <span className="eyebrow">මාර්ග උපදෙස්</span>
      <h2 className="title">ස්ථානය</h2>
      <Divider />
      <div className="venue-grid">
        <div className="map-slot">
          <iframe loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`} />
        </div>
        
      </div>
    </>
  );
}

function ContactSection() {
  return (
    <>
      <span className="eyebrow">විමසීම්</span>
      <h2 className="title">සම්බන්ධ වන්න</h2>
      <Divider />
      <div className="c-grid">
        {CONTACTS.map((c, i) => (
          <div className="c-card" key={i}>
            <div className="avatar">♥</div>
            <h3>{c.name}</h3>
            <div className="role">{c.role}</div>
            <a href={`tel:+94${digitsOnly(c.phone).slice(1)}`}>{c.phone}</a>
            <a href={`https://wa.me/94${digitsOnly(c.phone).slice(1)}`} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default function OnePageSections() {
  const sections = [
    ['countdown', <CountdownSection key="countdown" />],
    ['students', <StudentsSection key="students" />],
    ['agenda', <AgendaSection key="agenda" />],
    ['gallery', <GallerySection key="gallery" />],
    ['venue', <VenueSection key="venue" />],
    ['contact', <ContactSection key="contact" />],
  ];

  return (
    <>
      {sections.map(([id, content]) => (
        <section className="scroll-section" id={id} key={id}>
          {content}
        </section>
      ))}
    </>
  );
}
