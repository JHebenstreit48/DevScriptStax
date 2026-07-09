import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Middleware = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/CoreConcepts/Middleware';

  return (
    <>
      <PageLayout>
        <PageTitle title="Middleware" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Middleware;
