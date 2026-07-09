import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HowNginxWorks = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Basics/Fundamentals/HowNginxWorks';

  return (
    <>
      <PageLayout>
        <PageTitle title="How Nginx Works" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HowNginxWorks;
