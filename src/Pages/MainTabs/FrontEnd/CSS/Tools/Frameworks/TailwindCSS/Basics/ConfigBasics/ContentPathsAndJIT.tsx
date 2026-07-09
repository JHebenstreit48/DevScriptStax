import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ContentPathsAndJIT = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/ConfigBasics/ContentPathsAndJIT';

  return (
    <>
      <PageLayout>
        <PageTitle title="Content Paths & JIT" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContentPathsAndJIT;
