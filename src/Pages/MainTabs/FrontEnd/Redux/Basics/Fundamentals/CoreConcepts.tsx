import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoreConcepts = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/Fundamentals/CoreConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Core Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreConcepts;
