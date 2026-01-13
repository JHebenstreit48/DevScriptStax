import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Versioning = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/RESTfulDesignPrinciples/Versioning';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Versioning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Versioning;
