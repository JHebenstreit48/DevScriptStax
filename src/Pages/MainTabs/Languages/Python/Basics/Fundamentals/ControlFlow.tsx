import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ControlFlow = () => {
  const markdownFilePath =
    'Languages/Python/Basics/Fundamentals/ControlFlow';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Python Basics - Control Flow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlFlow;