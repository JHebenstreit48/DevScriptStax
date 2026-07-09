import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
