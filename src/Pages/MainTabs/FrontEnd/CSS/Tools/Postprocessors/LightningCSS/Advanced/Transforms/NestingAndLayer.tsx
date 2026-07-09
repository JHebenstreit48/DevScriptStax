import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NestingAndLayer = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Transforms/NestingAndLayer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Nesting & @layer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NestingAndLayer;
