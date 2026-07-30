import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Resolvers = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaAndResolvers/Resolvers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Resolvers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Resolvers;
