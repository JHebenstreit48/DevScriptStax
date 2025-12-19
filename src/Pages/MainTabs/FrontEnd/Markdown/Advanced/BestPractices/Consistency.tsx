import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Consistency = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/BestPractices/Consistency';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Consistency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Consistency;
