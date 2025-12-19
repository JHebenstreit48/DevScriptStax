import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SelectorFeatures = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PolyfillsAndTransforms/SelectorFeatures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Selector Features" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SelectorFeatures;
