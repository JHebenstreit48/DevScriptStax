import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitLab = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/RemotePlatforms/GitLab';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GitLab" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitLab;
