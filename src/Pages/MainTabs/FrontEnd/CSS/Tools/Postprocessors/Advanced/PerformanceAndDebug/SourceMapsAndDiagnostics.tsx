import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SourceMapsAndDiagnostics = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/PerformanceAndDebug/SourceMapsAndDiagnostics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Source Maps & Diagnostics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SourceMapsAndDiagnostics;
