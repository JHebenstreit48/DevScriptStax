import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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