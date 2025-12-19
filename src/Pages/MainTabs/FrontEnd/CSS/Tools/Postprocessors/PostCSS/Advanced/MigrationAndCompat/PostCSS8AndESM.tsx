import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PostCSS8AndESM = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/MigrationAndCompat/PostCSS8AndESM';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="PostCSS 8 & ESM" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostCSS8AndESM;
