import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ObjectsBasics = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ObjectsJSON/ObjectsBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Objects Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObjectsBasics;
