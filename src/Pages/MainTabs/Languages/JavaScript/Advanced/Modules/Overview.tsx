import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Overview = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Modules/Overview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Modules - Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;