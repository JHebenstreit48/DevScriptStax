import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Executors = () => {
  const markdownFilePath = 'Tools/CICDTools/CircleCI/Advanced/RunnersAndExecutors/Executors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Executors (Docker/Machine)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Executors;
