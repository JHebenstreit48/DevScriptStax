import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GraphQLDataLayer = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/CoreConcepts/GraphQLDataLayer';

  return (
    <>
      <PageLayout>
        <PageTitle title="GraphQL Data Layer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GraphQLDataLayer;
