import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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