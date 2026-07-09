import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LazyLoadingWithSuspense = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/Routing/LazyLoadingWithSuspense';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lazy Loading with Suspense" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LazyLoadingWithSuspense;
