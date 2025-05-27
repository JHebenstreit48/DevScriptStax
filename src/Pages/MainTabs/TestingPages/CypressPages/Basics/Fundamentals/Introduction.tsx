import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRender';

const CypressIntro = () => {
  const markdownFilePath =
    'TestingNotes/EndToEndNotes/CypressNotes/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <Header text="Introduction" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default CypressIntro;
