import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FFI = () => {
  const markdownFilePath = 'Languages/Dart/Advanced/Interop/FFI';

  return (
    <>
      <PageLayout>
        <PageTitle title="FFI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FFI;
