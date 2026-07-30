import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DiagnosticsAndAsyncHooks = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Observability/DiagnosticsAndAsyncHooks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Diagnostics & async_hooks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DiagnosticsAndAsyncHooks;
