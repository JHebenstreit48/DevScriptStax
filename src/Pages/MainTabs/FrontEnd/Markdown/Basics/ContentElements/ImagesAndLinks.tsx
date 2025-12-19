import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImagesAndLinks = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Basics/ContentElements/ImagesAndLinks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Images & Links" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImagesAndLinks;
