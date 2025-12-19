import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DevTools = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloClient/Advanced/Tooling/DevTools';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DevTools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevTools;
