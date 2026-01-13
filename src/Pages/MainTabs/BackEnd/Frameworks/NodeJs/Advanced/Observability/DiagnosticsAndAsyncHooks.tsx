import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DiagnosticsAndAsyncHooks = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Observability/DiagnosticsAndAsyncHooks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Diagnostics & async_hooks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DiagnosticsAndAsyncHooks;
