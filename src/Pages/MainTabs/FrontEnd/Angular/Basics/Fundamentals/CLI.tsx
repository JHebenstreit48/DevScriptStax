import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CLI = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/Fundamentals/CLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Fundamentals - CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLI;