import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ title, children }) {
  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} | වෙස් තැබීමේ උත්සවය` : 'වෙස් තැබීමේ උත්සවය'}</title>
      </Head>
      <Nav />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
