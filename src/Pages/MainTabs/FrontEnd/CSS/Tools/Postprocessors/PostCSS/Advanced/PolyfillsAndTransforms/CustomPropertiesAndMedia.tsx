import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomPropertiesAndMedia = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PolyfillsAndTransforms/CustomPropertiesAndMedia';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Properties & Media" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomPropertiesAndMedia;
