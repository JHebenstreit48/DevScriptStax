import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Structure = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Workspaces/Structure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Structure;
