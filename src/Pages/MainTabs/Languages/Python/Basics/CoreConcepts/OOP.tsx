import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OOP = () => {
  const markdownFilePath = 'Languages/Python/Basics/CoreConcepts/OOP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="OOP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OOP;
