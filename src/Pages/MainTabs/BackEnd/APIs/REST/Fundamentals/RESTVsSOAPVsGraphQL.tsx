import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RESTVsSOAPVsGraphQL = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/Fundamentals/RESTVsSOAPVsGraphQL';

  return (
    <>
      <PageLayout>
        <PageTitle title="REST vs SOAP vs GraphQL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTVsSOAPVsGraphQL;
