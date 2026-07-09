import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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