import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VueCLI = () => {
  const markdownFilePath = 'FrontEnd/Vue/Basics/Fundamentals/VueCLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Vue CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VueCLI;
