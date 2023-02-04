import Head from 'next/head'
import data from '../data.json'
import { useState, useEffect } from 'react';
import Navbar from "../components/NavBar";
import SocialLink from '../components/SocialLink';
import LinkBar from '../components/LinkBar'
import Footer from "../components/Footer";
import Mainsec from "../components/MainSec";


export interface Count {
  forks: number,
  stars: number
}

export default function Home() {
  const [githubInfo, setGithubInfo] = useState<Count>({ stars: 0, forks: 0 });
  useEffect(() => {
    fetch('https://api.github.com/repos/yasier-ansari/personal-da-tree').then(res2 => res2.json())
      .then((res2) => {
        const { stargazers_count } = res2;
        const { forks_count } = res2;
        setGithubInfo({
          stars: stargazers_count,
          forks: forks_count
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const headTitle = `${data.name} | Da-tree | ${data.prof}`;
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-7xl mx-auto -mt-8 mb-12  ">
        <Mainsec></Mainsec>
        <div className="flex items-center justify-center space-x-4 md:space-x-8 mx-auto mt-8">
          {
            data.socials.map(function (obj, i) {
              return <SocialLink {...obj} key={i} />;
            })
          }
        </div>
        <div className="flex items-center font-medium flex-col space-y-5 justify-center mt-12 px-4 md:px-40 lg:px-80 ">
          {
            data.links.map(function (obj, i) {
              return <LinkBar {...obj} key={i} />;
            })
          }
        </div>
      </main>
      <Footer {...{ githubInfo }} />
    </div>
  )
}
