import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuiltInDirectives = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/Directives/BuiltInDirectives';

  return (
    <>
      <PageLayout>
        <PageTitle title="Built-in Directives" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuiltInDirectives;
