import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GitLab = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/RemotePlatforms/GitLab';

  return (
    <>
      <PageLayout>
        <PageTitle title="GitLab" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitLab;
