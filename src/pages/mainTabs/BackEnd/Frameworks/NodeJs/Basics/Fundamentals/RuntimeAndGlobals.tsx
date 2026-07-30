import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RuntimeAndGlobals = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/Fundamentals/RuntimeAndGlobals';

  return (
    <>
      <PageLayout>
        <PageTitle title="Node.js Basics - Runtime & Globals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RuntimeAndGlobals;