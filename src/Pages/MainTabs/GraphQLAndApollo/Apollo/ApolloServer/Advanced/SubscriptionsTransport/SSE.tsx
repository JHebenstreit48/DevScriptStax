import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SSE = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/SubscriptionsTransport/SSE';

  return (
    <>
      <PageLayout>
        <PageTitle title="SSE (graphql-sse)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSE;
