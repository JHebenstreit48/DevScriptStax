import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
