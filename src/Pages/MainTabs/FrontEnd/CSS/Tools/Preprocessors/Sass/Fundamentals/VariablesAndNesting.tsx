import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VariablesAndNesting = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/Fundamentals/VariablesAndNesting';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Variables & Nesting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VariablesAndNesting;
