import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
