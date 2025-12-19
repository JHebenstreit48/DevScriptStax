import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ContentPathsAndJIT = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/ConfigBasics/ContentPathsAndJIT';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Content Paths & JIT" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContentPathsAndJIT;
