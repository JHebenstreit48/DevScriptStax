import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypeScriptProjects = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/TypesAndTS/TypeScriptProjects';

  return (
    <>
      <PageLayout>
        <PageTitle title="TypeScript Projects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeScriptProjects;
