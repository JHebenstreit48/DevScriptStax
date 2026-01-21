import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Schema = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Basics/SchemaAndExecution/Schema';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Schema" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Schema;
