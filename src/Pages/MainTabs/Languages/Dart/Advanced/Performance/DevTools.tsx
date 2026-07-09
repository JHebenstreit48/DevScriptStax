import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DevTools = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Performance/DevTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="DevTools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevTools;
