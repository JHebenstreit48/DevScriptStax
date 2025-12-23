import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfigureStore = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/StoreSetup/ConfigureStore';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="configureStore" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigureStore;
