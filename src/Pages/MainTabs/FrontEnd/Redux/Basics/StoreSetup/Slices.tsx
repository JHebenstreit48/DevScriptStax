import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Slices = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/StoreSetup/Slices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Slices (createSlice)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Slices;
