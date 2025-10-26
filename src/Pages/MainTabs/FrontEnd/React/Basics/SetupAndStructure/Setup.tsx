import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReactSetup = () => {
  const markdownFilePath =
    'FrontEnd/ReactNotes/Basics/Fundamentals/Setup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Project Setup in React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReactSetup;