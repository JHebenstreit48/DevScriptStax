import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Testing = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Quality/Testing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Testing (cargo test)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Testing;
