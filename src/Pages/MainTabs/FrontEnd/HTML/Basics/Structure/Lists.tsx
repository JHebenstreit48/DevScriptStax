import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Lists = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/Structure/Lists';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lists" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Lists;