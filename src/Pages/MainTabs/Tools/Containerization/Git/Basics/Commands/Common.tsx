import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Common = () => {
  const markdownFilePath = 'Tools/Containerization/Git/Basics/Commands/Common';

  return (
    <>
      <PageLayout>
        <PageTitle title="Git Commands - Common" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Common;