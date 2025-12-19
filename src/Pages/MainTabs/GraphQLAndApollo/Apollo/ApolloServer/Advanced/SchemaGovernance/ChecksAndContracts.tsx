import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ChecksAndContracts = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/SchemaGovernance/ChecksAndContracts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Checks & Contracts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChecksAndContracts;
