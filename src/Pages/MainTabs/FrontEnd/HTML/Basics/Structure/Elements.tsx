import PageLayout from '@/Components/NavigationUI/PageLayout';
import Notes from '@/Components/PageComponents/Notes/Notes';
import Header from '@/Components/Shared/Header/Header';

const Elements = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/Structure/Elements';

  return (
    <>
      <PageLayout>
        <Header />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Elements;