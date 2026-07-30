import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HtaccessGuide = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Basics/Configuration/HtaccessGuide';

  return (
    <>
      <PageLayout>
        <PageTitle title=".htaccess Guide" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HtaccessGuide;
