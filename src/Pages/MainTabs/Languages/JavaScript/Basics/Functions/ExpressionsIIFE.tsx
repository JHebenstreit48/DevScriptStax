import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExpressionsIIFE = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Functions/ExpressionsIIFE';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Functions - Expressions & IIFE" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExpressionsIIFE;