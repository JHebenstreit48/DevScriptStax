import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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