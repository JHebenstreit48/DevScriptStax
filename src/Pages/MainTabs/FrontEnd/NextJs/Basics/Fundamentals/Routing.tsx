import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Routing = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/Fundamentals/Routing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Next.js Fundamentals - Routing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Routing;