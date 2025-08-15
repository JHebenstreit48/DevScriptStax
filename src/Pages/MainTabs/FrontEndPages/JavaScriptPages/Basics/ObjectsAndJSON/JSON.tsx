import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSON = () => {
  const markdownFilePath =
    'FrontEndNotes/JavaScriptNotes/Basics/ObjectsAndJSON/JSON';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Working with JSON" />
        <Notes
          filePath={markdownFilePath}
          
        />
      </PageLayout>
    </>
  );
};

export default JSON;
