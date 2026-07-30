import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PromisesAndAsyncAwait = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ModernES6/Promises';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Basics - Promises and Async/Await" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PromisesAndAsyncAwait;