import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProviderAndStore = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/ReactIntegration/ProviderAndStore';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Provider & Store" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProviderAndStore;
