import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Tables = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Basics/ContentElements/Tables';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tables;
