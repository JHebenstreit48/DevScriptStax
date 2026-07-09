import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Sharing = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Workspaces/Sharing';

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
