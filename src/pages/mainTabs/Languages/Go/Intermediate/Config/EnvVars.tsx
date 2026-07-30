import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EnvVars = () => {
  const markdownFilePath = 'Languages/Go/Intermediate/Config/EnvVars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Env Vars (os, flag)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvVars;
