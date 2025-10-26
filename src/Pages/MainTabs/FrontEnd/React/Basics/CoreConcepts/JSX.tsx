import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSXAndRendering = () => {
  const markdownFilePath =
    'FrontEnd/ReactNotes/Basics/CoreConcepts/JSX';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JSX in React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSXAndRendering;
