import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnhancersAndComposition = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/MiddlewareAndAsync/EnhancersAndComposition';

  return (
    <>
      <PageLayout>
        <PageTitle title="Enhancers & Composition" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnhancersAndComposition;
