import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
