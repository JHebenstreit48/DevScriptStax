import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InstallingDocker = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Basics/Fundamentals/InstallingDocker';

  return (
    <>
      <PageLayout>
        <PageTitle title="Installing Docker" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallingDocker;
