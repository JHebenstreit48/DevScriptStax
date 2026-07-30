import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TreeShakingImports = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/SSRAndCodeSplit/TreeShakingImports';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tree-Shaking Imports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TreeShakingImports;
