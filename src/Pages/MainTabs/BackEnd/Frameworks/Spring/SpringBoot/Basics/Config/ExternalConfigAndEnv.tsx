import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExternalConfigAndEnv = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/Config/ExternalConfigAndEnv';

  return (
    <>
      <PageLayout>
        <PageTitle title="External Config & Env" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExternalConfigAndEnv;
