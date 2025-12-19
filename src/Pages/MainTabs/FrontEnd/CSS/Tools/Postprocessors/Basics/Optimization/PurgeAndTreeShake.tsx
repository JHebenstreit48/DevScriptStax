import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PurgeAndTreeShake = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Optimization/PurgeAndTreeShake';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Purge & Tree-Shake" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PurgeAndTreeShake;
