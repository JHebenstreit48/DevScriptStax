import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
