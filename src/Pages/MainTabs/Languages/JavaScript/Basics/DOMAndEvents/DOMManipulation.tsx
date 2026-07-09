import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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