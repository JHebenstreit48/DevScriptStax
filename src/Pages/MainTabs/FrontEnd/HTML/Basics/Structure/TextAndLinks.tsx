import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TextAndLinks = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/Structure/TextAndLinks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Text & Links" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TextAndLinks;
