import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AutomatingBuildsAndReleases = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Basics/Pipelines/AutomatingBuildsAndReleases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Automating Builds & Releases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutomatingBuildsAndReleases;
