import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Versioning = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/RESTfulDesignPrinciples/Versioning';

  return (
    <>
      <PageLayout>
        <PageTitle title="Versioning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Versioning;
