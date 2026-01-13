import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TryCatchAndErrorTypes = () => {
  const markdownFilePath = 'Languages/JavaScript/Intermediate/ErrorHandling/TryCatchAndErrorTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Try/Catch and Error Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TryCatchAndErrorTypes;
