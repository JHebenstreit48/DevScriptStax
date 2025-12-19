import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AutoprefixAndTargets = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Features/AutoprefixAndTargets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Autoprefix & Targets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutoprefixAndTargets;
