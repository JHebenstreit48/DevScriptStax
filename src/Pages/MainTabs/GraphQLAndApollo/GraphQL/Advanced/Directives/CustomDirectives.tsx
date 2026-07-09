import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
