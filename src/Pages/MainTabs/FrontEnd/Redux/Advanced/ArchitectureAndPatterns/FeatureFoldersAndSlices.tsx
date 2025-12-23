import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FeatureFoldersAndSlices = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/ArchitectureAndPatterns/FeatureFoldersAndSlices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Feature Folders & Slices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FeatureFoldersAndSlices;
