import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FFI = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/InteropAndPerf/FFI';

  return (
    <>
      <PageLayout>
        <PageTitle title="FFI (C/C++)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FFI;
