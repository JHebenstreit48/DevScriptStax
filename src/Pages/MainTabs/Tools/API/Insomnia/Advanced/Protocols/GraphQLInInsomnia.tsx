import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
