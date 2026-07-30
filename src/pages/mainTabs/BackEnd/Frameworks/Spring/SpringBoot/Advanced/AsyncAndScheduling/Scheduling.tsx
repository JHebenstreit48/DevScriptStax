import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Scheduling = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/AsyncAndScheduling/Scheduling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Scheduling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Scheduling;
