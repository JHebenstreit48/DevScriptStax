import { useEffect, useState, lazy, Suspense } from 'react';
import { fetchHomeMarkdown } from '@/Components/PageComponents/Notes/HomeText/Utils/fetchHomeMarkdown';

const HomeRenderer = lazy(() =>
  import('@/Components/PageComponents/Notes/HomeText/HomeRenderer')
);

const NotesHome = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetchHomeMarkdown('/Home.md')
      .then(setMarkdownContent)
      .catch((err) => console.error('Home.md failed to load:', err));
  }, []);

  return (
    <div className="homeMarkdownContent">
      <Suspense fallback={<p>Loading home content...</p>}>
        {markdownContent && <HomeRenderer content={markdownContent} />}
      </Suspense>
    </div>
  );
};

export default NotesHome;