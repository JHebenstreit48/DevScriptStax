import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Triggers = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Animations/Triggers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Animations - Triggers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Triggers;