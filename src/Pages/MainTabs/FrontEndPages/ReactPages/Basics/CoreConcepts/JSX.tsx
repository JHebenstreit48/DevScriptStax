import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSXAndRendering = () => {
  const markdownFilePath =
    'FrontEndNotes/ReactNotes/Basics/CoreConcepts/JSX';

  return (
    <>
      <PageLayout>
        <Header text="JSX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSXAndRendering;
