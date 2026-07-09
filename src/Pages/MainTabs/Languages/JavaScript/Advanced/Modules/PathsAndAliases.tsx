import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PathsAliases = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Modules/PathsAndAliases';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Modules - Paths and Aliases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PathsAliases;