import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DesignTokensAndCSSVars = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Theming/DesignTokensAndCSSVars';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Design Tokens & CSS Vars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DesignTokensAndCSSVars;
