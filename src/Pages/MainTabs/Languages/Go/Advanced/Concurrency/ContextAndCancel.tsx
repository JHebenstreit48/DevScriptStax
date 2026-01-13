import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ContextAndCancel = () => {
  const markdownFilePath = 'Languages/Go/Advanced/Concurrency/ContextAndCancel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Context & Cancel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContextAndCancel;
