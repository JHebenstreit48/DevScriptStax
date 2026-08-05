import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GitStash = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Advanced/Tools/GitStash';

  return (
    <>
      <PageLayout>
        <PageTitle title="Git Stash" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GitStash;
