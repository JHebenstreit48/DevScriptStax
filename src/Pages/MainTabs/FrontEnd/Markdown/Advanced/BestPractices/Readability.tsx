import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Readability = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/BestPractices/Readability';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Readability" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Readability;
