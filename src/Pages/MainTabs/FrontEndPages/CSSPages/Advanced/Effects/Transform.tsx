import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Transform = () => {
  const markdownFilePath = 'FrontEndNotes/CSSNotes/Advanced/Effects/Transform';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Effects - Transform" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Transform;