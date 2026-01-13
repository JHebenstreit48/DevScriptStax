import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StarterOptimization = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/SetupAndConfiguration/StarterOptimization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Starter Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StarterOptimization;
