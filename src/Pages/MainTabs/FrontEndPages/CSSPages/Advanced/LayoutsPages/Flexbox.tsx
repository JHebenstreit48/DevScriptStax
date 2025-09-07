import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Flexbox = () => {
  const markdownFilePath = 'FrontEndNotes/CSSNotes/Advanced/LayoutsNotes/Flexbox';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Layouts - Flexbox" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Flexbox;