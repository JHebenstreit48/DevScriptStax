import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyntaxVsSass = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals/SyntaxVsSass';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Syntax vs Sass" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyntaxVsSass;
