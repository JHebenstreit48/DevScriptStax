import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
