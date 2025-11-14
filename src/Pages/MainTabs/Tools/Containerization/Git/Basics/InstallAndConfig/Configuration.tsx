import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Configuration = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/InstallAndConfig/Configuration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Git - Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Configuration;