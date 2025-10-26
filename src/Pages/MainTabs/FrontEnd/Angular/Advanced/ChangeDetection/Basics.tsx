import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CDBasics = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/ChangeDetection/Basics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Change Detection - Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CDBasics;