import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PatternsAndLibraries = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/Core/Forms/PatternsAndLibraries';

  return (
    <>
      <PageLayout>
        <PageTitle title="React Basics - Form Patterns & Libraries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PatternsAndLibraries;