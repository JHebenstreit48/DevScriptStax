import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
