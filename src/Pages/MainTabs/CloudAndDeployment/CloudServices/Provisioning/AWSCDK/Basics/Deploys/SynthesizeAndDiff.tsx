import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SynthesizeAndDiff = () => {
  const markdownFilePath = 'CloudAndDeploy/CloudServices/Provisioning/AWSCDK/Basics/Deploys/SynthesizeAndDiff';

  return (
    <>
      <PageLayout>
        <PageTitle title="Synthesize & Diff" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SynthesizeAndDiff;
