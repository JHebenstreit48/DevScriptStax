import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildCacheAndBuildx = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/Performance/BuildCacheAndBuildx';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build Cache & buildx" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildCacheAndBuildx;
