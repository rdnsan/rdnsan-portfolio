import type { NextPage } from 'next';
import Head from 'next/head';
import { About, Contact, Hero, Navbar } from '@components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ridwan Nurul Ikhsan</title>
        <meta name='description' content='Full Stack Developer' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Navbar />
      <div id='content'>
        <Hero />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Home;