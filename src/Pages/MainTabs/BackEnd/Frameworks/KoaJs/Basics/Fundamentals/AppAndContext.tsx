import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AppAndContext = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/Fundamentals/AppAndContext';

  return (
    <>
      <PageLayout>
        <PageTitle title="App & Context" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppAndContext;
