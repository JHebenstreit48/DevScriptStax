import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProviderAndStore = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/ReactIntegration/ProviderAndStore';

  return (
    <>
      <PageLayout>
        <PageTitle title="Provider & Store" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProviderAndStore;
