import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PromisesAndAsyncAwait = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ModernES6/Promises';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Basics - Promises and Async/Await" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PromisesAndAsyncAwait;