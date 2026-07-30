import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ApacheVsNginx = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Basics/Fundamentals/ApacheVsNginx';

  return (
    <>
      <PageLayout>
        <PageTitle title="Apache vs Nginx" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ApacheVsNginx;
