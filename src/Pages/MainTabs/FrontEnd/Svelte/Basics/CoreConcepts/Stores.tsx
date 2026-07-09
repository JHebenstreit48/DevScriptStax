import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Stores = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/CoreConcepts/Stores';

  return (
    <>
      <PageLayout>
        <PageTitle title="Stores" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Stores;
