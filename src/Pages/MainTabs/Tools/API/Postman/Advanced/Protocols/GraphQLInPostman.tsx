import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GraphQLInPostman = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Protocols/GraphQLInPostman';

  return (
    <>
      <PageLayout>
        <PageTitle title="GraphQL in Postman" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GraphQLInPostman;
