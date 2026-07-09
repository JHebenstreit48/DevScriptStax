import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SchemaStitchingConcepts = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/Composition/SchemaStitchingConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Schema Stitching Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SchemaStitchingConcepts;
