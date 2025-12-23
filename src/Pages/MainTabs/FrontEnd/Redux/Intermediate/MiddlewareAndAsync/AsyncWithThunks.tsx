import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AsyncWithThunks = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/MiddlewareAndAsync/AsyncWithThunks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Async with Thunks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncWithThunks;
