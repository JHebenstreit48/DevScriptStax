import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PartialsAndImports = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/PartialsAndImports';

  return (
    <>
      <PageLayout>
        <PageTitle title="Partials & Imports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PartialsAndImports;
