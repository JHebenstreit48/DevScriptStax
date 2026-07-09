import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
