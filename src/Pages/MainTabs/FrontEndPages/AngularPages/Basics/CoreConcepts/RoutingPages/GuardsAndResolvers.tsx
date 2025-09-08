import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GuardsAndResolvers = () => {
  const markdownFilePath = 'FrontEndNotes/AngularNotes/Basics/CoreConcepts/RoutingPages/GuardsAndResolvers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Routing - Guards and Resolvers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GuardsAndResolvers;