import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AppFactory = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/Fundamentals/AppFactory';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="App Factory" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppFactory;
