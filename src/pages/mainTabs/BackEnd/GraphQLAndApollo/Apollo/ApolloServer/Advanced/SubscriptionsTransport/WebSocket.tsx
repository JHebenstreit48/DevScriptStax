import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WebSocket = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/SubscriptionsTransport/WebSocket';

  return (
    <>
      <PageLayout>
        <PageTitle title="WebSocket (graphql-ws)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebSocket;
