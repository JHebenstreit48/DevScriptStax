import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TryCatchAndErrorTypes = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ErrorHandling/TryCatchAndErrorTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Try/Catch and Error Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TryCatchAndErrorTypes;