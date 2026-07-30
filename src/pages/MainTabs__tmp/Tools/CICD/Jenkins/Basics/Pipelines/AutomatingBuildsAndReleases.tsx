import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AutomatingBuildsAndReleases = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/AutomatingBuildsAndReleases';

  return (
    <>
      <PageLayout>
        <PageTitle title="Automating Builds & Releases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutomatingBuildsAndReleases;
