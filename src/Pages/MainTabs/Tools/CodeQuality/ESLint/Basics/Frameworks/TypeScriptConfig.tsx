import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
