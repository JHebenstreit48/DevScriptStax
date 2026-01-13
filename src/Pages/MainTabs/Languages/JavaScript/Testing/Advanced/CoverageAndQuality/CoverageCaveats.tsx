import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoverageCaveats = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/CoverageAndQuality/CoverageCaveats';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Coverage Caveats (Transpile/ESM)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoverageCaveats;
