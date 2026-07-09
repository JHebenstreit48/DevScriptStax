import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EnvAndCORSBasics = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/ProjectSetup/EnvAndCORSBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Env & CORS Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvAndCORSBasics;
