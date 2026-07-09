import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Setup = () => {
  const markdownFilePath = 'FrontEnd/Svelte/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals: Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Setup;
