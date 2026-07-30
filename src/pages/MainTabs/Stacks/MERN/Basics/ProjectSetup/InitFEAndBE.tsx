import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
