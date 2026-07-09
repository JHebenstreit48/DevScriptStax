import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ApplicationEvents = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/Events/ApplicationEvents';

  return (
    <>
      <PageLayout>
        <PageTitle title="Application Events" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ApplicationEvents;
