import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CacheAndInvalidation = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/RTKQuery/CacheAndInvalidation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cache & Invalidation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CacheAndInvalidation;
