import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ApacheVsNginx = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Basics/Fundamentals/ApacheVsNginx';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Apache vs Nginx" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ApacheVsNginx;
