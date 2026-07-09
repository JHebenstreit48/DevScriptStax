import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ASTWalkAndTransforms = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PluginAuthoring/ASTWalkAndTransforms';

  return (
    <>
      <PageLayout>
        <PageTitle title="AST Walk & Transforms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ASTWalkAndTransforms;
