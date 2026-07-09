import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ContextAndCancel = () => {
  const markdownFilePath = 'Languages/Go/Advanced/Concurrency/ContextAndCancel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Context & Cancel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContextAndCancel;
