import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityBestPractices = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/RESTfulDesignPrinciples/SecurityBestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityBestPractices;
