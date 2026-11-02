import Layout from '../components/Layout';
import Divider from '../components/Divider';

// 👉 Replace with your actual venue address and Google Maps embed query.
const VENUE_NAME = 'Sri Thilakarama Viharaya';
const VENUE_ADDRESS = 'Madapatha Rd, Piliyandala';
const MAPS_QUERY = `${VENUE_NAME}, ${VENUE_ADDRESS}`;

export default function Venue() {
  return (
    <Layout title="ස්ථානය">
      <span className="eyebrow">මාර්ග උපදෙස්</span>
      <h2 className="title">උත්සව ස්ථානය</h2>
      <Divider />

      <div className="venue-grid">
        <div className="map-slot">
          <iframe
            loading="lazy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`}
          />
        </div>
        <div className="addr-card">
          <h3>{VENUE_NAME}</h3>
          <p>{VENUE_ADDRESS}</p>
          <span className="label">නවතන පහසුකම්</span>
          <p>[වාහන නැවැත්වීමේ පහසුකම් පිළිබඳ විස්තර]</p>
          <div className="cta-row" style={{ justifyContent: 'flex-start', marginTop: 20 }}>
            <a
              className="btn solid"
              href={`https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}`}
              target="_blank"
              rel="noreferrer"
            >
              📍 මාර්ග සටහන ලබාගන්න
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
