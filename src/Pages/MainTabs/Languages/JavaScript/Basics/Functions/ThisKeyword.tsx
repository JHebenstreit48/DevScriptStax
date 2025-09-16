import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ThisKeyword = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Functions/ThisKeyword';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Functions - This Keyword" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThisKeyword;