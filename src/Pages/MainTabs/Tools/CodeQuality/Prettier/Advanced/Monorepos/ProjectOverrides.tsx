import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
