import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Overview = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/HTTPMethods/Overview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTTPMethods: Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;
