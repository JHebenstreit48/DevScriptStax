import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WebpackRollup = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Integration/WebpackRollup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Webpack / Rollup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebpackRollup;
