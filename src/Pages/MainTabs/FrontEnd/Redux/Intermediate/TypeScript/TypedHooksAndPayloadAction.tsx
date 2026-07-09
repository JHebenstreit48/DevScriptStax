import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
