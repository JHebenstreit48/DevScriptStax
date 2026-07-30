import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CSSVarsAndOverrides = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Theming/CSSVarsAndOverrides';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Vars & Overrides" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSSVarsAndOverrides;
