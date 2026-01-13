import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RuntimeAndGlobals = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/Fundamentals/RuntimeAndGlobals';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Runtime & Globals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RuntimeAndGlobals;
