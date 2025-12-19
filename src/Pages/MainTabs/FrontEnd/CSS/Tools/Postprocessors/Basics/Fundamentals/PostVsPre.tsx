import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PostVsPre = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Basics/Fundamentals/PostVsPre';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Post vs Pre" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PostVsPre;
