import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebSocketLink = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/SubscriptionsTransport/WebSocketLink';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="WebSocket Link" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebSocketLink;
