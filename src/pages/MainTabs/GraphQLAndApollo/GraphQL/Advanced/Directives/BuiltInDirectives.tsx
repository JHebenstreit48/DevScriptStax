import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
