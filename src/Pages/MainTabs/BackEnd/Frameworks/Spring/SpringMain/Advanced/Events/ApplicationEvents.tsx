import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
