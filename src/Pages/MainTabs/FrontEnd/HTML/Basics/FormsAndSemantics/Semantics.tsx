import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Semantics = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/HTMLSemantics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTML Basics - Semantics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Semantics;