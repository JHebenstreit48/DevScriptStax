import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnhancersAndComposition = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/MiddlewareAndAsync/EnhancersAndComposition';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Enhancers & Composition" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnhancersAndComposition;
