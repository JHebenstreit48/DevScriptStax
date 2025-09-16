import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Advanced = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Arrays/Advanced';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Arrays - Advanced Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Advanced;