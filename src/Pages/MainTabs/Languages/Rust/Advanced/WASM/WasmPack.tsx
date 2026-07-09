import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
