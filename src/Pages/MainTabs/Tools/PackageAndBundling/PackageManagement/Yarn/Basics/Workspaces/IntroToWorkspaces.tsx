import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroToWorkspaces = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Workspaces/IntroToWorkspaces';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Intro to Workspaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroToWorkspaces;
