import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LazyLoading = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/CoreConcepts/Modules/LazyLoading';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Modules - Lazy Loading" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LazyLoading;