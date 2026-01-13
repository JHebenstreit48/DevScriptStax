import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Optimization = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Intermediate/Aggregation/Optimization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optimization;
