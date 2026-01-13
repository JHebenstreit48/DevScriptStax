import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HtaccessGuide = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Basics/Configuration/HtaccessGuide';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title=".htaccess Guide" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HtaccessGuide;
