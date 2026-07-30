import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GuardsAndResolvers = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/CoreConcepts/Routing/GuardsAndResolvers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Routing - Guards and Resolvers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GuardsAndResolvers;