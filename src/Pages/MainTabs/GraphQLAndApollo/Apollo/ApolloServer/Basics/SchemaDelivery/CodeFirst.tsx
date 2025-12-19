import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CodeFirst = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaDelivery/CodeFirst';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Code-First" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodeFirst;
