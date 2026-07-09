import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIVersioningStrategies = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Versioning/APIVersioningStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Versioning Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIVersioningStrategies;
