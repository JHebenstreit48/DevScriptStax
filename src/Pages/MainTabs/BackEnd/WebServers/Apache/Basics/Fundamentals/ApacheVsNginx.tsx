import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
