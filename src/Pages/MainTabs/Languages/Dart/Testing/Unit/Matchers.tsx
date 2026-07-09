import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Matchers = () => {
  const markdownFilePath = 'Languages/Dart/Testing/Unit/Matchers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Matchers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Matchers;
