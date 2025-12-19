import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NestingAndLayer = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Transforms/NestingAndLayer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Nesting & @layer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NestingAndLayer;
