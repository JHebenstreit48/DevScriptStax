import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
