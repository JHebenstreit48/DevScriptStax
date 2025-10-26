import PageLayout from '@/Components/NavigationUI/PageLayout'
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Attributes = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/Structure/Attributes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTML Basics - Attributes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Attributes;