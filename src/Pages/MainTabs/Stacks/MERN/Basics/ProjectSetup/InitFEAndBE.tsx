import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InitFEAndBE = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/ProjectSetup/InitFEAndBE';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Init FE & BE" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InitFEAndBE;
