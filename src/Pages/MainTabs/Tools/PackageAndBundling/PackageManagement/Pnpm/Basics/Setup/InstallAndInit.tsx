import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallAndInit = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Pnpm/Basics/Setup/InstallAndInit';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Install & Init" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndInit;
