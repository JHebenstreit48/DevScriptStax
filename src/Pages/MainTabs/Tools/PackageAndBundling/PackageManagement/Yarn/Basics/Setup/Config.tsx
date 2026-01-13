import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Config = () => {
  const markdownFilePath = 'Tools/PackageAndBundling/PackageManagement/Yarn/Basics/Setup/Config';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Config (.yarnrc*)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Config;
