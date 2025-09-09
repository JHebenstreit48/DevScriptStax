import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Variables = () => {
  const markdownFilePath = 'FrontEndNotes/CSSNotes/Advanced/ResponseAndVar/Variables';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Variables" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Variables;