import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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