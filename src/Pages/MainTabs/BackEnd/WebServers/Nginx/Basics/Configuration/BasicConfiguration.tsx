import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
