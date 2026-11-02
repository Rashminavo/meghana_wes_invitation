import Layout from '../components/Layout';
import Divider from '../components/Divider';

// 👉 Edit the event program here.
const agenda = [
  { time: '7.00 පෙ.ව.', title: 'චාරිත්‍ර ආරම්භය', desc: '[ගුරුවරුන්ගේ ආශිර්වාදයෙන් හා දෙවියන්ගේ ආරාධනාවෙන් අනතුරුව, සම්ප්‍රදායික චාරිත්‍ර හා පූජා කටයුතු ඇරඹේ. පහන් දැල්වීම, පිරිත් සජ්ඣායනය සහ ගුරු පාරම්පරික චාරිත්‍ර ද මෙයට ඇතුළත් වේ.]' },
  { time: '8.00 පෙ.ව.', title: 'නර්තනාංග ආරම්භය', desc: '[වසර ගණනාවක පුහුණුවෙන් සමන්විත ශිෂ්‍ය ශිෂ්‍යාවන් විසින් සම්ප්‍රදායික නර්තන අංග වේදිකාගත කරනු ලැබේ. උඩරට නර්තනයේ විවිධ අංග හා වාදන කණ්ඩායමේ සජීවී වාදනය සමඟින් උත්සවයට විශේෂත්වයක් එක් කරයි.]' },
  { time: '11.30 පෙ.ව.', title: 'උත්සවයේ නිමාව', desc: '[ගුරුවරුන් හා ආරාධිතයන්ගේ ආශිර්වාද පිරිනැමීමත් සමඟින් උත්සවය සමාප්ත වේ. සහභාගී වූ සැමට ස්තුතිය පළ කරමින් හා ඉදිරි නර්තන ගමන සඳහා සුබ පැතුම් එක් කරමින් උත්සවය අවසන් කරනු ලැබේ.]' }
];

export default function AgendaPage() {
  return (
    <Layout title="න්‍යාය පත්‍රය">
      <span className="eyebrow">න්‍යාය පත්‍රය</span>
      <h2 className="title">න්‍යාය පත්‍රය</h2>
      <Divider />

      <div className="timeline">
        {agenda.map((item, i) => (
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
    </Layout>
  );
}
