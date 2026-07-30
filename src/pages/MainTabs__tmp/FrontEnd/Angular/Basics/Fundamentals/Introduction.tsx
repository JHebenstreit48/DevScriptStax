import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Fundamentals - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;