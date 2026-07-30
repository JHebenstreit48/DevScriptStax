import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Optimizing = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/ChangeDetection/Optimizing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Change Detection - Optimizing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optimizing;