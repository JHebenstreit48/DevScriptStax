import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SSE = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/SubscriptionsTransport/SSE';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SSE (graphql-sse)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSE;
