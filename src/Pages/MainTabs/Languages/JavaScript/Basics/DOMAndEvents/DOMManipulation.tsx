import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DOMManipulation = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/DOMAndEvents/DOMManipulation';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Basics - DOM Manipulation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DOMManipulation;