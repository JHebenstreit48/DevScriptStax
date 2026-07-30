import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const UnitVsIntegration = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/Fundamentals/UnitVsIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Unit vs Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default UnitVsIntegration;
