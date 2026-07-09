import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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