import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SerdeJSON = () => {
  const markdownFilePath = 'Languages/Rust/Basics/IOAndData/SerdeJSON';

  return (
    <>
      <PageLayout>
        <PageTitle title="Serde JSON (Rust)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SerdeJSON;
