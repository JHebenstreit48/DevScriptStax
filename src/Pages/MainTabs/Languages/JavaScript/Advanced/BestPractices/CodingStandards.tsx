import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CodingStandards = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/BestPractices/CodingStandards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Coding Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CodingStandards;
