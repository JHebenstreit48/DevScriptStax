import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Optimizing = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/ChangeDetection/Optimizing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Change Detection - Optimizing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optimizing;