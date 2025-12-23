import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Stores = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/CoreConcepts/Stores';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Stores" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Stores;
