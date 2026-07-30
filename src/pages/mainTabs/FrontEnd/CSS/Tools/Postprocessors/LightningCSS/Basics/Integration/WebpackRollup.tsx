import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WebpackRollup = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Integration/WebpackRollup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Webpack / Rollup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebpackRollup;
