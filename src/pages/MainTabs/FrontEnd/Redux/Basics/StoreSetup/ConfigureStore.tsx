import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConfigureStore = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/StoreSetup/ConfigureStore';

  return (
    <>
      <PageLayout>
        <PageTitle title="configureStore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigureStore;
