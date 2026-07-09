import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AppStructure = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/Fundamentals/AppStructure';

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
