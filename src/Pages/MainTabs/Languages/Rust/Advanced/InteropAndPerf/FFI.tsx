import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FFI = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/InteropAndPerf/FFI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="FFI (C/C++)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FFI;
