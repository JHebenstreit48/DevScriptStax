import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DesignTokensAndCSSVars = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Theming/DesignTokensAndCSSVars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Design Tokens & CSS Vars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DesignTokensAndCSSVars;
