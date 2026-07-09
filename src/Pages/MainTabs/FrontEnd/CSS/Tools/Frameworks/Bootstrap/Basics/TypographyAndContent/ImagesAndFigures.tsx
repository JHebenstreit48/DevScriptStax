import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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