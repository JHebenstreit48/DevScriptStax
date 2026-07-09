import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StarterOptimization = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/SetupAndConfiguration/StarterOptimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Starter Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StarterOptimization;
