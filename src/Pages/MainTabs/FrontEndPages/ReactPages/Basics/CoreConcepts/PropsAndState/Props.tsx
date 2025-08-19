import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Props = () => {
  const markdownFilePath =
    'FrontEndNotes/ReactNotes/Basics/CoreConcepts/PropsState/Props';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Props in React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Props;
