import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PostcssConfig = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Configuration/PostcssConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="postcss.config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostcssConfig;
