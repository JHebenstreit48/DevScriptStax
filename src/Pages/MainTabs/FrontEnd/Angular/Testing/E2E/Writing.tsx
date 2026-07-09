import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
