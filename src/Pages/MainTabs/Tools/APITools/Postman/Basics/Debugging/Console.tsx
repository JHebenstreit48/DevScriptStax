import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Console = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Debugging/Console';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Console" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Console;
