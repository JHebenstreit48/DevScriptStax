import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
