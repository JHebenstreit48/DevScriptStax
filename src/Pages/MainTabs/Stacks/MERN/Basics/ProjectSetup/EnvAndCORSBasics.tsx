import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvAndCORSBasics = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/ProjectSetup/EnvAndCORSBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Env & CORS Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvAndCORSBasics;
