import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
