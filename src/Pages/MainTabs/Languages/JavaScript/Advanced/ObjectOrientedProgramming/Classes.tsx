import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Classes = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/ObjectOrientedProgramming/Classes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Classes (ES6+)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Classes;
