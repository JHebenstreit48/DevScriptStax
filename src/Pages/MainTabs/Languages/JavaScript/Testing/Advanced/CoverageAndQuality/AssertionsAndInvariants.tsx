import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AssertionsAndInvariants = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/CoverageAndQuality/AssertionsAndInvariants';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Assertions & Invariants" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssertionsAndInvariants;
