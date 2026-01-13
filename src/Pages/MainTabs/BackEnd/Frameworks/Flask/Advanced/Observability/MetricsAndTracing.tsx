import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MetricsAndTracing = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Observability/MetricsAndTracing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Metrics & Tracing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MetricsAndTracing;
