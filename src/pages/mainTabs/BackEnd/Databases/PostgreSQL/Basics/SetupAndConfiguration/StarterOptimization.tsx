import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
