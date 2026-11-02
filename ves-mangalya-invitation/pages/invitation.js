import Layout from '../components/Layout';
import Divider from '../components/Divider';
import Link from 'next/link';
import Image from 'next/image';
import OnePageSections from '../components/OnePageSections';

export default function Home() {
  return (
    <Layout title="මුල් පිටුව">
      <section id="home" className="scroll-section hero-section">
        <span className="eyebrow">ආරාධනා පත්‍රය</span>
        <h1 className="title hero-title">වෙස් තැබීමේ උත්සවය</h1>

        <div className="hero-photo-wrap frame-photo">
          <Image
            src="/hero-invitation.png"
            alt="වෙස් තැබීමේ උත්සව ආරාධනා පත්‍රය"
            width={900}
            height={1600}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>

        <div className="hero-caption">
          <p>
            සහෝදර සහෝදරියන්ට ගෞරවයෙන් ආරාධනා කර සිටිමු,
            වෙස් තැබීමේ ඓතිහාසික උත්සවයට සහභාගී වී ආශිර්වාද එක් කරන්න.
          </p>
          <div className="hero-nekath">
            නැකත් වේලාව
            <b>සවස 7.00</b>
          </div>
        </div>

        <Divider />

        <div className="cta-row">
          <Link href="/#countdown" className="btn solid">
            කාල ගණනය බලන්න
          </Link>
          <Link href="/#venue" className="btn outline">
            ස්ථානය බලන්න
          </Link>
        </div>
      </section>

      <OnePageSections />
    </Layout>
  );
}
