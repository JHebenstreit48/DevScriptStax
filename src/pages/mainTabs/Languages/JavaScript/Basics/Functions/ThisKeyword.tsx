import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ThisKeyword = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Functions/ThisKeyword';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Functions - This Keyword" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThisKeyword;