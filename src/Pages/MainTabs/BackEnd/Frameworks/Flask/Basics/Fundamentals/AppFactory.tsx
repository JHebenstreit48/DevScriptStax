import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
