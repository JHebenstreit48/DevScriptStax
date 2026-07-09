import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AppStructure = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/Fundamentals/AppStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="App Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppStructure;
