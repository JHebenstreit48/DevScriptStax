import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CargoAndCrates = () => {
  const markdownFilePath = 'Languages/Rust/Basics/ProjectSetup/CargoAndCrates';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cargo & Crates" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CargoAndCrates;
