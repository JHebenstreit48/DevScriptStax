import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypedStoreAndDispatch = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/TypeScript/TypedStoreAndDispatch';

  return (
    <>
      <PageLayout>
        <PageTitle title="Typed Store & Dispatch" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypedStoreAndDispatch;
