import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MonorepoSetup = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Workspaces/MonorepoSetup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Monorepo Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MonorepoSetup;
