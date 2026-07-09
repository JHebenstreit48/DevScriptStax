import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
