import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Scalability = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/BestPractices/Scalability';

  return (
    <>
      <PageLayout>
        <PageTitle title="Scalability" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Scalability;
