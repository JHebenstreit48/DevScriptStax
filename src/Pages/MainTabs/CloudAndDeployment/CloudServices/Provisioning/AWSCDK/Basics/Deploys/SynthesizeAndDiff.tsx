import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SynthesizeAndDiff = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Deploys/SynthesizeAndDiff';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Synthesize & Diff" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SynthesizeAndDiff;
