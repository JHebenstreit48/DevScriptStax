import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
