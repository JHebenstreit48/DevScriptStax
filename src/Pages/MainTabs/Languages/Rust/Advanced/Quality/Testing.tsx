import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Testing = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Quality/Testing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Testing (cargo test)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Testing;
