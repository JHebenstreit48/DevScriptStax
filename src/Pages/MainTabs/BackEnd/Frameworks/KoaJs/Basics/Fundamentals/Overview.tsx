import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Overview = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/Fundamentals/Overview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals: Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Overview;
