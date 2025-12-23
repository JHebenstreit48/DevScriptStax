import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NormalizationAndEntityAdapter = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/ArchitectureAndPatterns/NormalizationAndEntityAdapter';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Normalization & EntityAdapter" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NormalizationAndEntityAdapter;
