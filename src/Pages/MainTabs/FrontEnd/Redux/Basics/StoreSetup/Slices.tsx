import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Slices = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/StoreSetup/Slices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Slices (createSlice)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Slices;
