import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TracingBasics = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Observability/TracingBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tracing Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TracingBasics;
