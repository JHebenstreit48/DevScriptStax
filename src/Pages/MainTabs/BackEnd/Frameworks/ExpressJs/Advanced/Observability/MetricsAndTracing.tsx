import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MetricsAndTracing = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Observability/MetricsAndTracing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Metrics & Tracing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MetricsAndTracing;
