import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Setup = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/SetupAndStructure/Setup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Project Setup in React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Setup;