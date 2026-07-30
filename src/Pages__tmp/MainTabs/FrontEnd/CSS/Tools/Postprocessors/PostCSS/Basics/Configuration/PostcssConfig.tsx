import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
