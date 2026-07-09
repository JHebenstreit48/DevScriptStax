import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InterfacesAndUnions = () => {
  const markdownFilePath = 'GraphQLAndApollo/GraphQL/Advanced/SchemaDesign/InterfacesAndUnions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Interfaces & Unions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterfacesAndUnions;
