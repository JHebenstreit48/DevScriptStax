import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NormalizationAndEntityAdapter = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/ArchitectureAndPatterns/NormalizationAndEntityAdapter';

  return (
    <>
      <PageLayout>
        <PageTitle title="Normalization & EntityAdapter" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NormalizationAndEntityAdapter;
