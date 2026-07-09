import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
