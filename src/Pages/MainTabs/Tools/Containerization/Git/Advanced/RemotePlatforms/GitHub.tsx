import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GitHub = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/RemotePlatforms/GitHub';

  return (
    <>
      <PageLayout>
        <PageTitle title="GitHub" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitHub;
