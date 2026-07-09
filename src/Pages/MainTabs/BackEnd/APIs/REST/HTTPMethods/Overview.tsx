import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Overview = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/HTTPMethods/Overview';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTTPMethods: Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;
