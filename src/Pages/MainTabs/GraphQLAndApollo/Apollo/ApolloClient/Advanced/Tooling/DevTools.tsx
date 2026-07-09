import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DevTools = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/Tooling/DevTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="DevTools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevTools;
