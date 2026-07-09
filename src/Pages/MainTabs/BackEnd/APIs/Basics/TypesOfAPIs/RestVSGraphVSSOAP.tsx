import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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