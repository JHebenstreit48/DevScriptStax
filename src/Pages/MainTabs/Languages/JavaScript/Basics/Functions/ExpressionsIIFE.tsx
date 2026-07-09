import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExpressionsIIFE = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Functions/ExpressionsIIFE';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Functions - Expressions & IIFE" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExpressionsIIFE;