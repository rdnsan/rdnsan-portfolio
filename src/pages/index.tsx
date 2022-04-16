import type { NextPage } from 'next';
import Head from 'next/head';
import { About, Contact, Hero, Navbar, Project } from '@components/index';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ridwan Nurul Ikhsan</title>
        <meta
          name='description'
          content='Ridwan Nurul Ikhsan is a full-stack developer based in Bandung with a passion for
              building digital service/stuffs he wants.'
        />
        <meta name='image' content='https://rdnsan.vercel.app/og.png' />
        <meta property='og:title' content='Ridwan Nurul Ikhsan' />
        <meta
          property='og:description'
          content='Ridwan Nurul Ikhsan is a full-stack developer based in Bandung with a passion for
              building digital service/stuffs he wants.'
        />
        <meta property='og:image' content='https://rdnsan.vercel.app/og.png' />
        <meta property='og:url' content='https://rdnsan.vercel.app' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#9ed5f4' />
        <link rel='icon' href='/logo.png' />
        <link rel='apple-touch-icon' href='/logo.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <Navbar />
      <div id='content'>
        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default Home;
