import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
