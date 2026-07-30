import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
