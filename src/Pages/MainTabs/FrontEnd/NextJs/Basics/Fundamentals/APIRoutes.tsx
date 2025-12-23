import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIRoutes = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/Fundamentals/APIRoutes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Next.js Fundamentals - API Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIRoutes;
