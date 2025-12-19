import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Matchers = () => {
  const markdownFilePath = 'Languages/Dart/Testing/Unit/Matchers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Matchers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Matchers;
