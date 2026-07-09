import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
