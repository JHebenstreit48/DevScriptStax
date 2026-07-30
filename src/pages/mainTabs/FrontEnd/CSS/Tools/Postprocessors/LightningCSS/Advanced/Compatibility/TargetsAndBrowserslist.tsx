import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TargetsAndBrowserslist = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Compatibility/TargetsAndBrowserslist';

  return (
    <>
      <PageLayout>
        <PageTitle title="Targets & Browserslist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TargetsAndBrowserslist;
