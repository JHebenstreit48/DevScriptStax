import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Overview = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Modules/Overview';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Modules - Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;