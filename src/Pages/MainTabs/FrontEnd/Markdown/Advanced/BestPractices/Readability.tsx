import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Readability = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/BestPractices/Readability';

  return (
    <>
      <PageLayout>
        <PageTitle title="Readability" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Readability;
