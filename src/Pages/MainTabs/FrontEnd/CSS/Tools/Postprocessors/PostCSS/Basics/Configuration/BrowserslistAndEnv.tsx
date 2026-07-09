import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
