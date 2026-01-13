import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SerdeJSON = () => {
  const markdownFilePath = 'Languages/Rust/Basics/IOAndData/SerdeJSON';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Serde JSON (Rust)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SerdeJSON;
