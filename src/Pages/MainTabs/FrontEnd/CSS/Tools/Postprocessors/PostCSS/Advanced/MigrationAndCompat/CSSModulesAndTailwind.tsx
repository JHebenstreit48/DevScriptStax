import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSSModulesAndTailwind = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/MigrationAndCompat/CSSModulesAndTailwind';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Modules & Tailwind" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSSModulesAndTailwind;
