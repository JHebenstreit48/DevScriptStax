import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CursorRelay = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/Pagination/CursorRelay';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cursor/Relay" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CursorRelay;
