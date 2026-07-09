import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomDirectives = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/Directives/CustomDirectives';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Directives" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomDirectives;
