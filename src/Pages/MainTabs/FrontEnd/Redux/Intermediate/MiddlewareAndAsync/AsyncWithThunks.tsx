import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AsyncWithThunks = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/MiddlewareAndAsync/AsyncWithThunks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Async with Thunks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncWithThunks;
