import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LazyLoading = () => {
  const markdownFilePath = 'FrontEndNotes/AngularNotes/Basics/CoreConcepts/RoutingPages/LazyLoading';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Routing - Lazy Loading" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LazyLoading;