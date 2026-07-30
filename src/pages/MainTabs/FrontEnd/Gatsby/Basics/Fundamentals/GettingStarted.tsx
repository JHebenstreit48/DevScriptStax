import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GettingStarted = () => {
  const markdownFilePath = 'FrontEnd/Gatsby/Basics/Fundamentals/GettingStarted';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals: Getting Started" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GettingStarted;
