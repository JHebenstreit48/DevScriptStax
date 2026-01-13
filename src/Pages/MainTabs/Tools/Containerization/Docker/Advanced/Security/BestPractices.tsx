import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BestPractices = () => {
  const markdownFilePath = 'Tools/Containerization/Docker/Advanced/Security/BestPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BestPractices;
