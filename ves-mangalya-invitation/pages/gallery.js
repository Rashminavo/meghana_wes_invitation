import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Divider from '../components/Divider';

const PHOTOS = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
  '/gallery7.jpg',
];

export default function Gallery() {
  const [open, setOpen] = useState(null);

  return (
    <Layout title="ගැලරිය">
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
    </Layout>
  );
}
