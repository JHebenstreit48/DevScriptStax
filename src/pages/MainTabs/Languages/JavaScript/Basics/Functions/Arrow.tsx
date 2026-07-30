import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Arrow = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Functions/Arrow';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript - Arrow Functions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Arrow;