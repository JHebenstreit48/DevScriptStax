import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Components = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/Fundamentals/Components';

  return (
    <>
      <PageLayout>
        <PageTitle title="Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Components;
