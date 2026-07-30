import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Offset = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/Pagination/Offset';

  return (
    <>
      <PageLayout>
        <PageTitle title="Offset" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Offset;
