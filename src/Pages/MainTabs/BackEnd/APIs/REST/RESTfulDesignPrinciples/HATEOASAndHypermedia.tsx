import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HATEOASAndHypermedia = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/RESTfulDesignPrinciples/HATEOASAndHypermedia';

  return (
    <>
      <PageLayout>
        <PageTitle title="HATEOAS & Hypermedia" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HATEOASAndHypermedia;
