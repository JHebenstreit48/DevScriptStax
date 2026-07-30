import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ImagesAndLinks = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Basics/ContentElements/ImagesAndLinks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Images & Links" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImagesAndLinks;
