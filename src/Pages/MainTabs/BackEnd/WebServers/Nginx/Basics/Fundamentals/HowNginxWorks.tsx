import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
