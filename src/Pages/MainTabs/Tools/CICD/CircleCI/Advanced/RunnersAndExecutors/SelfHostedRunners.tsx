import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SelfHostedRunners = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/RunnersAndExecutors/SelfHostedRunners';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Self-Hosted Runners" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SelfHostedRunners;
