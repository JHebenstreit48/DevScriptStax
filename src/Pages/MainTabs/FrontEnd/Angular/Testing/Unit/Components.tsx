import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Components = () => {
  const markdownFilePath = 'FrontEnd/Angular/Testing/Unit/Components';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Unit Testing - Component" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Components;