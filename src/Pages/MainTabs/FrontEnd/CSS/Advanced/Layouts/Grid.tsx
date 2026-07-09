import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Grid = () => {
  const markdownFilePath = 'FrontEnd/CSS/Advanced/Layouts/Grid';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Layouts - Grid" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Grid;