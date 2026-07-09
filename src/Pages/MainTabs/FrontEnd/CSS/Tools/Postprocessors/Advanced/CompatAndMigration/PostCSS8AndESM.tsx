import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PostCSS8AndESM = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/CompatAndMigration/PostCSS8AndESM';

  return (
    <>
      <PageLayout>
        <PageTitle title="PostCSS 8+ & ESM" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostCSS8AndESM;
