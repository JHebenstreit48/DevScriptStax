import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomPlatforms = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/Deployment/CustomPlatforms';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Platforms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomPlatforms;
