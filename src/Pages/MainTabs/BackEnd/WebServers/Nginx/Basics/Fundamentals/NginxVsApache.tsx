import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NginxVsApache = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Basics/Fundamentals/NginxVsApache';

  return (
    <>
      <PageLayout>
        <PageTitle title="Nginx vs Apache" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NginxVsApache;
