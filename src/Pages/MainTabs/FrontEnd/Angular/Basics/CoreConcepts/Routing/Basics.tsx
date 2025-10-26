import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Basics = () => {
  const markdownFilePath = 'FrontEnd/Angular/Basics/CoreConcepts/Routing/Basics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Angular Routing - Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;