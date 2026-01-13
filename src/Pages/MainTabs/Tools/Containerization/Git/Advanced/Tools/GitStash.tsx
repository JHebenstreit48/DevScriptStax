import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GitStash = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/Tools/GitStash';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Git Stash" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitStash;
