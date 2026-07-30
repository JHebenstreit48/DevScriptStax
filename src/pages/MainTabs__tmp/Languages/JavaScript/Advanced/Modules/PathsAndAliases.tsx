import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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