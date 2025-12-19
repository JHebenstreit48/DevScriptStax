import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PartialsAndImports = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/PartialsAndImports';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Partials & Imports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PartialsAndImports;
