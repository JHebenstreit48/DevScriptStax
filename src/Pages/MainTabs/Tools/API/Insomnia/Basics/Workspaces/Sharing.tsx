import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Sharing = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Workspaces/Sharing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sharing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Sharing;
