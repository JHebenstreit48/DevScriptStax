import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomServer = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/AdvancedFeatures/CustomServer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomServer;
