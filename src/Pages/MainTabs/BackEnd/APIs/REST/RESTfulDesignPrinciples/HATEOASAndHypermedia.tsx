import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
