import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataFlow = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/Fundamentals/DataFlow';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Data Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataFlow;
