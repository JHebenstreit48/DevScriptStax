import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Collections = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Basics/Workspaces/Collections';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Collections" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Collections;
