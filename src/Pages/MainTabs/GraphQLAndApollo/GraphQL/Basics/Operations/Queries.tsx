import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Queries = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Basics/Operations/Queries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Queries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Queries;
