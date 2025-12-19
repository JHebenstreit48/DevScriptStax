import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExtendAndPlaceholder = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/ExtendAndPlaceholder';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Extend & Placeholder" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExtendAndPlaceholder;
