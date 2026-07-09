import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GraphQLInInsomnia = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/Protocols/GraphQLInInsomnia';

  return (
    <>
      <PageLayout>
        <PageTitle title="GraphQL in Insomnia" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GraphQLInInsomnia;
