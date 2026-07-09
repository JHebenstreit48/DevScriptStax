import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Assertions = () => {
  const markdownFilePath = 'Languages/JavaScript/Testing/Basics/Authoring/Assertions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Assertions (Basics)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Assertions;
