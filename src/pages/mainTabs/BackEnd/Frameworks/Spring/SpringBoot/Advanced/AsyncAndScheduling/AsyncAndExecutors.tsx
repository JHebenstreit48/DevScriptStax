import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AsyncAndExecutors = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/AsyncAndScheduling/AsyncAndExecutors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Async & Executors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncAndExecutors;
