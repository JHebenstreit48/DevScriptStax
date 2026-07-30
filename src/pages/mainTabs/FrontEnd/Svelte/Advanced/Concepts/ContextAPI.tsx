import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ContextAPI = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Advanced/Concepts/ContextAPI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Context API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContextAPI;
