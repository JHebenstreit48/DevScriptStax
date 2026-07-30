import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomMediaAndSelectors = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Transforms/CustomMediaAndSelectors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Media & Selectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomMediaAndSelectors;
