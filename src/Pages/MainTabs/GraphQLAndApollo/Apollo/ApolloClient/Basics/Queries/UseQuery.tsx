import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const UseQuery = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/Queries/UseQuery';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="useQuery" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UseQuery;
