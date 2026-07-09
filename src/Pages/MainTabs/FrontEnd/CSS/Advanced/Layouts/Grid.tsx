import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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