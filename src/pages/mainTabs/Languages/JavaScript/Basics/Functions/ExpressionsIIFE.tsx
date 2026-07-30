import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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