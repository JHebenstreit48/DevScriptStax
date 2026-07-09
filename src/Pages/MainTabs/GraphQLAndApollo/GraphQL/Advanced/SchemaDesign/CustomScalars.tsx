import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomScalars = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/SchemaDesign/CustomScalars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Scalars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomScalars;
