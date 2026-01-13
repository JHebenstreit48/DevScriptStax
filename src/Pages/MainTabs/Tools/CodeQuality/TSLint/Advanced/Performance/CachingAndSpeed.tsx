import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingAndSpeed = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/Performance/CachingAndSpeed';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Caching & Speed" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingAndSpeed;
