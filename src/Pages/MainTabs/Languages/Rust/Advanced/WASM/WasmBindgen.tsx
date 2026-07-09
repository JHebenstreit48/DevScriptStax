import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WasmBindgen = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/WASM/WasmBindgen';

  return (
    <>
      <PageLayout>
        <PageTitle title="wasm-bindgen" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WasmBindgen;
