import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OperatorsAndCalculations = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/OperatorsAndCalculations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Operators & Calculations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OperatorsAndCalculations;
