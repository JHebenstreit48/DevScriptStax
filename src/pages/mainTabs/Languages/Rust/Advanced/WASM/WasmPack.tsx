import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WasmPack = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/WASM/WasmPack';

  return (
    <>
      <PageLayout>
        <PageTitle title="wasm-pack" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WasmPack;
