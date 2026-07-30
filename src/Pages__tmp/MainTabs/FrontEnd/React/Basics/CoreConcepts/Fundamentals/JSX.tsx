import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JSXAndRendering = () => {
  const markdownFilePath = 'FrontEnd/React/Basics/CoreConcepts/Fundamentals/JSX';

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