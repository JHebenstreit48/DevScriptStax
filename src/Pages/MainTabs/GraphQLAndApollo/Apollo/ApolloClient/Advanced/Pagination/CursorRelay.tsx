import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CursorRelay = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/Pagination/CursorRelay';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cursor/Relay" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CursorRelay;
