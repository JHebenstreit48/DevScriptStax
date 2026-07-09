import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProjectAndTsconfig = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/TypeAware/ProjectAndTsconfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="Project & tsconfig" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectAndTsconfig;
