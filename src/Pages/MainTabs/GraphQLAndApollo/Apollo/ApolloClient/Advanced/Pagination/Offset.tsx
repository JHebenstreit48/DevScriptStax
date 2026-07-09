import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
