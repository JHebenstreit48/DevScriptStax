import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
