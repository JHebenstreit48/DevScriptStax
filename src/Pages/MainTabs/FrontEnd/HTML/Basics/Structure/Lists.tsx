import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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