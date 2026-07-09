import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Listeners = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/Events/Listeners';

  return (
    <>
      <PageLayout>
        <PageTitle title="Listeners" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Listeners;
