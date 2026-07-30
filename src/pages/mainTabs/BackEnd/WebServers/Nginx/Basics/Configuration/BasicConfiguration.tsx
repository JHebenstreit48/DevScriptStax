import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BasicConfiguration = () => {
  const markdownFilePath = 'BackEnd/WebServers/Nginx/Basics/Configuration/BasicConfiguration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Basic Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicConfiguration;
