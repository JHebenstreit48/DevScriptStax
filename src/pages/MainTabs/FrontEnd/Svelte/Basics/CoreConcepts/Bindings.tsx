import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Bindings = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/CoreConcepts/Bindings';

  return (
    <>
      <PageLayout>
        <PageTitle title="Bindings" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Bindings;
