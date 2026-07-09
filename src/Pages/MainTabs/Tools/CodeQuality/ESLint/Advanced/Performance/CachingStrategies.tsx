import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CachingStrategies = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Advanced/Performance/CachingStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Caching Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CachingStrategies;
