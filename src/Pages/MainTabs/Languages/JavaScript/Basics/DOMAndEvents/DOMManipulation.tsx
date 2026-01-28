import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DOMManipulation = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/DOMAndEvents/DOMManipulation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Basics - DOM Manipulation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DOMManipulation;