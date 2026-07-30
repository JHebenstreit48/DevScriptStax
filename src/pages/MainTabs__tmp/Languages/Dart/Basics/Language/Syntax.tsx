import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Syntax = () => {
  const markdownFilePath = 'Languages/Dart/Basics/Language/Syntax';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dart Basics - Language Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Syntax;
