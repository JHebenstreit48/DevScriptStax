import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomPlatforms = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/Deployment/CustomPlatforms';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Platforms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomPlatforms;
