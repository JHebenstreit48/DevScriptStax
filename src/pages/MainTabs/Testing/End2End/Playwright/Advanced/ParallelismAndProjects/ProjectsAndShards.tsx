import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProjectsAndShards = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/ParallelismAndProjects/ProjectsAndShards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Projects & Shards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectsAndShards;
