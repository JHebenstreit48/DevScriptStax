import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Writing = () => {
  const markdownFilePath = 'FrontEnd/Angular/Testing/EndToEnd/Writing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Writing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Writing;
