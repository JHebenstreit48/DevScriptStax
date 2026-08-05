import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SelfHostedRunners = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/RunnersAndExecutors/SelfHostedRunners';

  return (
    <>
      <PageLayout>
        <PageTitle title="Self-Hosted Runners" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SelfHostedRunners;
