import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Types = () => {
  const markdownFilePath = 'Languages/Dart/Basics/Language/Types';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dart Basics - Language Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Types;
