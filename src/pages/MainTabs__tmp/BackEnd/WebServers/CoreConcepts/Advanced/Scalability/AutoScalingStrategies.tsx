import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AutoScalingStrategies = () => {
  const markdownFilePath = 'BackEnd/WebServers/CoreConcepts/Advanced/Scalability/AutoScalingStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Auto-Scaling Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutoScalingStrategies;
