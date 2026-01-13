import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkingWithJSON = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ObjectsJSON/WorkingWithJSON';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Working with JSON" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkingWithJSON;
