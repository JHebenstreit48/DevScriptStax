import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RESTVSGraphQLVSSOAP = () => {
  const markdownFilePath = 'BackEnd/API/Basics/TypesOfAPIs/RESTVSGraphQLVSSOAP';

  return (
    <>
      <PageLayout>
        <PageTitle title="REST vs GraphQL vs SOAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTVSGraphQLVSSOAP;