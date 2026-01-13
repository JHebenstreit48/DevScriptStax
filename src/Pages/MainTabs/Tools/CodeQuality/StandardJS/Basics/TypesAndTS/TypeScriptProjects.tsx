import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TypeScriptProjects = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/TypesAndTS/TypeScriptProjects';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TypeScript Projects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypeScriptProjects;
