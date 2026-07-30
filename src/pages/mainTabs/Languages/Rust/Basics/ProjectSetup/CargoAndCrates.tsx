import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
