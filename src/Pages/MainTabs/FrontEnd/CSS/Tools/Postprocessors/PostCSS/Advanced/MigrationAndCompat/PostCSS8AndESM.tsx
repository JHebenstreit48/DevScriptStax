import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PostCSS8AndESM = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/MigrationAndCompat/PostCSS8AndESM';

  return (
    <>
      <PageLayout>
        <PageTitle title="PostCSS 8 & ESM" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostCSS8AndESM;
