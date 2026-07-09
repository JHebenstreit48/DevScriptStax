import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImportsAndScope = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Less/AdvancedConcepts/ImportsAndScope';

  return (
    <>
      <PageLayout>
        <PageTitle title="Imports & Scope" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImportsAndScope;
