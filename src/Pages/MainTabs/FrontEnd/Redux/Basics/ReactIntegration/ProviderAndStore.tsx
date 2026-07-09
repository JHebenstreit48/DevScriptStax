import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
