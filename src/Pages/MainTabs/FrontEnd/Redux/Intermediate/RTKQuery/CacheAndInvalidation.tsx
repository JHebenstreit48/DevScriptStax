import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CacheAndInvalidation = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/RTKQuery/CacheAndInvalidation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cache & Invalidation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CacheAndInvalidation;
