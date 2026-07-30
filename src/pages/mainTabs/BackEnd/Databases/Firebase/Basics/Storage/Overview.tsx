import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Overview = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Basics/Storage/Overview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Storage: Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;
