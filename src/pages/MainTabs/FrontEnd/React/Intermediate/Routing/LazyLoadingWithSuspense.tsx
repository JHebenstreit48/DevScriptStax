import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
