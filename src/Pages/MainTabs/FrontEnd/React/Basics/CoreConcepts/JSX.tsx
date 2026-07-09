import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSXAndRendering = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/CoreConcepts/JSX';

  return (
    <>
      <PageLayout>
        <PageTitle title="React Core Concepts - JSX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSXAndRendering;
