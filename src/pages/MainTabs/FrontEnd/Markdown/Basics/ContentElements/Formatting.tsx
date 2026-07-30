import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
