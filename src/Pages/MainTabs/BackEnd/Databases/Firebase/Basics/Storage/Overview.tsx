import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Overview = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Storage/Overview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Storage: Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;
