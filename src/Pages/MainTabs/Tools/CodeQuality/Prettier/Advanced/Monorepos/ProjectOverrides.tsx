import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProjectOverrides = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/Monorepos/ProjectOverrides';

  return (
    <>
      <PageLayout>
        <PageTitle title="Project Overrides" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectOverrides;
