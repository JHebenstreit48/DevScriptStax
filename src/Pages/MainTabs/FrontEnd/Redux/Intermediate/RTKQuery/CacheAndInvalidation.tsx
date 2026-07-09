import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
