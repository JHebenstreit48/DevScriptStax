import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Positioning = () => {
  const markdownFilePath = 'FrontEnd/CSS/Basics/BoxModelAndPosition/Positioning';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Positioning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Positioning;