import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FeatureFoldersAndSlices = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/ArchitectureAndPatterns/FeatureFoldersAndSlices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Feature Folders & Slices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FeatureFoldersAndSlices;
