import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProjectAndTsconfig = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/TypeAware/ProjectAndTsconfig';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Project & tsconfig" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectAndTsconfig;
