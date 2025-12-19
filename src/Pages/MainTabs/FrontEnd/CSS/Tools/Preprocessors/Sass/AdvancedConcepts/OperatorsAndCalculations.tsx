import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OperatorsAndCalculations = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/AdvancedConcepts/OperatorsAndCalculations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Operators & Calculations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OperatorsAndCalculations;
