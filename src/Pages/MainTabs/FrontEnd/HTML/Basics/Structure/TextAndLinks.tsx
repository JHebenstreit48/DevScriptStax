import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
