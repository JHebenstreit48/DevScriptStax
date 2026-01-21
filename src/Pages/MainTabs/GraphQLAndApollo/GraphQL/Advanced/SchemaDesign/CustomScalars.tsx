import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomScalars = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/SchemaDesign/CustomScalars';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Scalars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomScalars;
