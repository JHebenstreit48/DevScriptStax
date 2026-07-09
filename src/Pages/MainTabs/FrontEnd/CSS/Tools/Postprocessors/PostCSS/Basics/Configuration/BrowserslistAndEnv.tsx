import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BrowserslistAndEnv = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Configuration/BrowserslistAndEnv';

  return (
    <>
      <PageLayout>
        <PageTitle title="Browserslist & Env" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BrowserslistAndEnv;
