import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PluginAPI = () => {
  const markdownFilePath = 'GraphQLAndApollo/Apollo/ApolloServer/Advanced/PluginsAndLifecycle/PluginAPI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Plugin API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PluginAPI;
