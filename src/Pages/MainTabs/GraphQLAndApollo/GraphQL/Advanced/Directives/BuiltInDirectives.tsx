import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuiltInDirectives = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/Directives/BuiltInDirectives';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Built-in Directives" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuiltInDirectives;
