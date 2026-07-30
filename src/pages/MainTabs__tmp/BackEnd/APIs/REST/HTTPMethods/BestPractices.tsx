import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BestPractices = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/HTTPMethods/BestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BestPractices;
