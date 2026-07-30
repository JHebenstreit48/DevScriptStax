import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AssertionsAndInvariants = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Advanced/CoverageAndQuality/AssertionsAndInvariants';

  return (
    <>
      <PageLayout>
        <PageTitle title="Assertions & Invariants" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssertionsAndInvariants;
