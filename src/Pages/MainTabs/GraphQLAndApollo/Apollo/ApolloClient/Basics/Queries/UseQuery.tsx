import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UseQuery = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/Queries/UseQuery';

  return (
    <>
      <PageLayout>
        <PageTitle title="useQuery" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UseQuery;
