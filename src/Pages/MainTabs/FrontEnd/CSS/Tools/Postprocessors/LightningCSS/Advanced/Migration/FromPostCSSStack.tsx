import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FromPostCSSStack = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Advanced/Migration/FromPostCSSStack';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="From PostCSS Stack" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FromPostCSSStack;
