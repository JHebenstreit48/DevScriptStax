import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitHub = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/RemotePlatforms/GitHub';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GitHub" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitHub;
