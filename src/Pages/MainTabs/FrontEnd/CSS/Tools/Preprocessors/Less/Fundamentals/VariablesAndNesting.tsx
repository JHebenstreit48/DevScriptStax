import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const VariablesAndNesting = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Less/Fundamentals/VariablesAndNesting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Variables & Nesting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariablesAndNesting;
