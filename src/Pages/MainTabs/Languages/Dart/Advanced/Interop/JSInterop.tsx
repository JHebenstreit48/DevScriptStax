import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JSInterop = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Interop/JSInterop';

  return (
    <>
      <PageLayout>
        <PageTitle title="JS Interop" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSInterop;
