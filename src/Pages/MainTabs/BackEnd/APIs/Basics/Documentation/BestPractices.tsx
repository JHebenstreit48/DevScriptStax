import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BestPractices = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/Documentation/BestPractices';

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
