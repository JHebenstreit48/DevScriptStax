import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BuildCacheAndBuildx = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/Performance/BuildCacheAndBuildx';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build Cache & buildx" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildCacheAndBuildx;
