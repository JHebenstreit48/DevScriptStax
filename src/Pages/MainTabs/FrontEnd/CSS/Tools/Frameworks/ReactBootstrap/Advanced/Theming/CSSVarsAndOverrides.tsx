import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSSVarsAndOverrides = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Theming/CSSVarsAndOverrides';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Vars & Overrides" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSSVarsAndOverrides;
