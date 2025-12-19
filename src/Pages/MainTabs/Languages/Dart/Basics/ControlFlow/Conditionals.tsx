import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Conditionals = () => {
  const markdownFilePath = 'Languages/Dart/Basics/ControlFlow/Conditionals';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Conditionals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Conditionals;
