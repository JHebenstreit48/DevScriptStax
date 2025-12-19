import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Resolvers = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaAndResolvers/Resolvers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Resolvers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Resolvers;
