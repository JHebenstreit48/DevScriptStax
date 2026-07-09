import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypedHooksAndPayloadAction = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/TypeScript/TypedHooksAndPayloadAction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Typed Hooks & PayloadAction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypedHooksAndPayloadAction;
