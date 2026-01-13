import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AssetPipelineImportmap = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/AssetsAndConfig/AssetPipelineImportmap';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Asset Pipeline / Importmap" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssetPipelineImportmap;
