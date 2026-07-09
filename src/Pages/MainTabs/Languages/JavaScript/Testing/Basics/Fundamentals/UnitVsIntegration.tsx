import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
