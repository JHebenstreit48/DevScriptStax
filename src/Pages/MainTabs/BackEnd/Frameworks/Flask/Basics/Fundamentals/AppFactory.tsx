import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AppFactory = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/Fundamentals/AppFactory';

  return (
    <>
      <PageLayout>
        <PageTitle title="App Factory" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppFactory;
