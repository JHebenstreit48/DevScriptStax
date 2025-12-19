import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ControlDirectivesAndLoops = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/ControlDirectivesAndLoops';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Control Directives & Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlDirectivesAndLoops;
