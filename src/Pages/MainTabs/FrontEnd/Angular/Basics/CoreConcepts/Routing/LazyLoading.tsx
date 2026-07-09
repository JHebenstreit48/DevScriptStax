import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LazyLoading = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/CoreConcepts/Routing/LazyLoading';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Routing - Lazy Loading" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LazyLoading;