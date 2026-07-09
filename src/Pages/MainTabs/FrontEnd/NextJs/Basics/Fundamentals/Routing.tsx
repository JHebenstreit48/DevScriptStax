import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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