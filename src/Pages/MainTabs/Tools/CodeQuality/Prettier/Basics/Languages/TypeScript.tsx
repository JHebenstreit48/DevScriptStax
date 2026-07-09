import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypeScript = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Languages/TypeScript';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeScript;
