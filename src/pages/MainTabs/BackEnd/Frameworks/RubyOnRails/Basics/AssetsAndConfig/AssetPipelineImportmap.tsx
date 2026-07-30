import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AssetPipelineImportmap = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Basics/AssetsAndConfig/AssetPipelineImportmap';

  return (
    <>
      <PageLayout>
        <PageTitle title="Asset Pipeline / Importmap" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssetPipelineImportmap;
