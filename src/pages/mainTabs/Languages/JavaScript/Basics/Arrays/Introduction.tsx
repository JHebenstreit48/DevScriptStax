import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Arrays/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Introduction to JavaScript Arrays" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;