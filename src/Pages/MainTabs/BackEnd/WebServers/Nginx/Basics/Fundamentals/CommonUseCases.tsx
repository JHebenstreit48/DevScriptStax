import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonUseCases = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Basics/Fundamentals/CommonUseCases';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonUseCases;
