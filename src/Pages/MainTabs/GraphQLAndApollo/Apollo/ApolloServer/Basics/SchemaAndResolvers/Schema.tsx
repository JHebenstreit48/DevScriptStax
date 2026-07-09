import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Schema = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaAndResolvers/Schema';

  return (
    <>
      <PageLayout>
        <PageTitle title="Schema" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Schema;
