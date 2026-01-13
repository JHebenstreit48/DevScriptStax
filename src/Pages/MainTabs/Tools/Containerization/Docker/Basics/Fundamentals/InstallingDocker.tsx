import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallingDocker = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/Fundamentals/InstallingDocker';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Installing Docker" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallingDocker;
