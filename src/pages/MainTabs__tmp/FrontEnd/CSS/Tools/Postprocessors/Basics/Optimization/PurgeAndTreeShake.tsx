import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PurgeAndTreeShake = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Optimization/PurgeAndTreeShake';

  return (
    <>
      <PageLayout>
        <PageTitle title="Purge & Tree-Shake" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PurgeAndTreeShake;
