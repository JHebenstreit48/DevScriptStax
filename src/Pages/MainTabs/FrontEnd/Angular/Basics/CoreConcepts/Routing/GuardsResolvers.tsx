import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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