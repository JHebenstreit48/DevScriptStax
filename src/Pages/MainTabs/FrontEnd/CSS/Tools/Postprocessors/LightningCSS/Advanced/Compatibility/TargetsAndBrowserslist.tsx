import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TargetsAndBrowserslist = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Compatibility/TargetsAndBrowserslist';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Targets & Browserslist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TargetsAndBrowserslist;
