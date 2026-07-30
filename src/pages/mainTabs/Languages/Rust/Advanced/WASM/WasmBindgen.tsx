import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
