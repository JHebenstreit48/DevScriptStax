import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GraphQLInPostman = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Protocols/GraphQLInPostman';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GraphQL in Postman" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GraphQLInPostman;
