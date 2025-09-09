import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Basics = () => {
  const markdownFilePath = 'FrontEndNotes/JavaScriptNotes/Basics/FunctionsNotes/BasicsAndDeclare';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Functions Basics & Declarations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;