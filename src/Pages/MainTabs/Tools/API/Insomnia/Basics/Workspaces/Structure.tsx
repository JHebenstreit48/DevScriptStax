import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Structure = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Workspaces/Structure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Structure;
