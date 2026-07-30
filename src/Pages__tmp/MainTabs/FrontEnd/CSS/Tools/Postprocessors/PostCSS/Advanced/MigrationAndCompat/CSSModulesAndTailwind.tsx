import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CSSModulesAndTailwind = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/MigrationAndCompat/CSSModulesAndTailwind';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Modules & Tailwind" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSSModulesAndTailwind;
