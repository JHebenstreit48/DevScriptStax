import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TreeShakingImports = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/SSRAndCodeSplit/TreeShakingImports';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tree-Shaking Imports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TreeShakingImports;
