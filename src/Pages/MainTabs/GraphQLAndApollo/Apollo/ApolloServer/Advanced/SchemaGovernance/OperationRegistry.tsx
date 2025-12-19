import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OperationRegistry = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/SchemaGovernance/OperationRegistry';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Operation Registry" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OperationRegistry;
