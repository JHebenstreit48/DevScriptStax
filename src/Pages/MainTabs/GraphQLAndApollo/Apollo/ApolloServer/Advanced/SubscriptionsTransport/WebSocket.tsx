import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebSocket = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/SubscriptionsTransport/WebSocket';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="WebSocket (graphql-ws)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebSocket;
