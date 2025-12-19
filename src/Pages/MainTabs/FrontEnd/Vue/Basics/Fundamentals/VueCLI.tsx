import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VueCLI = () => {
  const markdownFilePath = 'FrontEnd/Vue/Basics/Fundamentals/VueCLI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Vue CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VueCLI;
