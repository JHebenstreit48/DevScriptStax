import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GitHubAndGitLabCICD = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/RemotePlatforms/GitHubAndGitLabCICD';

  return (
    <>
      <PageLayout>
        <PageTitle title="GitHub & GitLab - CI/CD" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitHubAndGitLabCICD;
