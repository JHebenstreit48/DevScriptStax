import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ASTWalkAndTransforms = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PluginAuthoring/ASTWalkAndTransforms';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="AST Walk & Transforms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ASTWalkAndTransforms;
