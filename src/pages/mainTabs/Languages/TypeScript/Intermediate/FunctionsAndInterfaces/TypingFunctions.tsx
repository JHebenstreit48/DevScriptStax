import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypingFunctions = () => {
  const markdownFilePath =
    'Languages/TypeScript/Intermediate/FunctionsAndInterfaces/TypingFunctions';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Intermediate - Typing Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypingFunctions;