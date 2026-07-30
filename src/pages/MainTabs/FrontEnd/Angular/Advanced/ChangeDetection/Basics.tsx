import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CDBasics = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/ChangeDetection/Basics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Change Detection - Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CDBasics;