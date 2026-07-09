import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Scalability = () => {
  const markdownFilePath = 'FrontEnd/Vue/Advanced/BestPractices/Scalability';

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
