import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
