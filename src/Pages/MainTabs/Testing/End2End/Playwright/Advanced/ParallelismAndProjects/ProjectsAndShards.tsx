import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProjectsAndShards = () => {
  const markdownFilePath = 'Testing/EndToEnd/Playwright/Advanced/ParallelismAndProjects/ProjectsAndShards';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Projects & Shards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectsAndShards;
