import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
