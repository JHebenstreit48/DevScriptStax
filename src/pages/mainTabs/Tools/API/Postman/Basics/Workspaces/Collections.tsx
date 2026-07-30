import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Collections = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Workspaces/Collections';

  return (
    <>
      <PageLayout>
        <PageTitle title="Collections" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Collections;
