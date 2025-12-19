import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImagesAndFigures = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent/ImagesAndFigures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Images & Figures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImagesAndFigures;
