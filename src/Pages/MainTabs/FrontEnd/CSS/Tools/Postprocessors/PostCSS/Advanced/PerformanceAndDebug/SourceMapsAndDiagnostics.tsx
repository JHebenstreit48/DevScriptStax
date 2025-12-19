import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SourceMapsAndDiagnostics = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PerformanceAndDebug/SourceMapsAndDiagnostics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Source Maps & Diagnostics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SourceMapsAndDiagnostics;
