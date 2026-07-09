import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImagesAndFigures = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent/ImagesAndFigures';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Frameworks - Bootstrap Utilities - Images and Figures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImagesAndFigures;