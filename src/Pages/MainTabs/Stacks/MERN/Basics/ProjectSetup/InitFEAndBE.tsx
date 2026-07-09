import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InitFEAndBE = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/ProjectSetup/InitFEAndBE';

  return (
    <>
      <PageLayout>
        <PageTitle title="Init FE & BE" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InitFEAndBE;
