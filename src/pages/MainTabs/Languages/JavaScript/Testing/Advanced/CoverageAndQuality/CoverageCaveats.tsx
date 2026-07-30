import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoverageCaveats = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/CoverageAndQuality/CoverageCaveats';

  return (
    <>
      <PageLayout>
        <PageTitle title="Coverage Caveats (Transpile/ESM)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoverageCaveats;
