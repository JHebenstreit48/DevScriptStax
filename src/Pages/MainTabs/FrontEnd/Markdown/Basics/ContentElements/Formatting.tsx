import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Formatting = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Basics/ContentElements/Formatting';

  return (
    <>
      <PageLayout>
        <PageTitle title="Formatting" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Formatting;
