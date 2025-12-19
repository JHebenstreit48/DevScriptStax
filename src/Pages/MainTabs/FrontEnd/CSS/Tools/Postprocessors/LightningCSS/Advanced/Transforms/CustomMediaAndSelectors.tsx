import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomMediaAndSelectors = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Transforms/CustomMediaAndSelectors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Media & Selectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomMediaAndSelectors;
