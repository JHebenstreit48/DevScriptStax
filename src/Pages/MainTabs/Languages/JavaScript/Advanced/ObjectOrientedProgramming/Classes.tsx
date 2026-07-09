import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Classes = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/ObjectOrientedProgramming/Classes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Classes (ES6+)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Classes;
