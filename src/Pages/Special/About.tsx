import { useEffect, useState } from 'react';
import Header from '@/Components/Shared/Header/Header';
import { fetchHomeMarkdown } from '@/Components/PageComponents/Notes/HomeText/Utils/fetchHomeMarkdown';
import HomeRenderer from '@/Components/PageComponents/Notes/HomeText/HomeRenderer';
// Reuse Home.scss so .siteInfo/.siteInfoContent/.Note styles apply
import '@/scss/Page/Home/Home.scss';

export default function About() {
  const [md, setMd] = useState<string>('');

  useEffect(() => {
    fetchHomeMarkdown('/About.md').then(setMd);
  }, []);

  return (
    <>
      <Header />
      <main className="homePage">
        <div className="siteInfo">
          <HomeRenderer content={md} />
        </div>
      </main>
    </>
  );
}