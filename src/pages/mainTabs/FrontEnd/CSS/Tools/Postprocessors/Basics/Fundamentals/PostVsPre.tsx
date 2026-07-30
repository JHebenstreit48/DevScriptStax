import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PostVsPre = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Fundamentals/PostVsPre';

  return (
    <>
      <PageLayout>
        <PageTitle title="Post vs Pre" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostVsPre;
