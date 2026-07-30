import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
