import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DefiniteAssign = () => {
  const markdownFilePath = 'Languages/Dart/Basics/NullSafety/DefiniteAssign';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Definite Assign" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DefiniteAssign;
