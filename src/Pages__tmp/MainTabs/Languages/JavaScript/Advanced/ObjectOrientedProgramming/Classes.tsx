import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Classes = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/ObjectOrientedProgramming/Classes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Classes (ES6+)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Classes;
