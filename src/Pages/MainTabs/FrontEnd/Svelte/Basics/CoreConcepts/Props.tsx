import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Props = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/CoreConcepts/Props';

  return (
    <>
      <PageLayout>
        <PageTitle title="Props" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Props;
