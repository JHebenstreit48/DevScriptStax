import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TypeScriptConfig = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/Frameworks/TypeScriptConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeScriptConfig;
