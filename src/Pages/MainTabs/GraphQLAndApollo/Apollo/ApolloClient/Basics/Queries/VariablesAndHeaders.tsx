import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VariablesAndHeaders = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Basics/Queries/VariablesAndHeaders';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Variables & Headers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariablesAndHeaders;
