import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIRoutes = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Basics/Fundamentals/APIRoutes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Next.js Fundamentals - API Routes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIRoutes;
