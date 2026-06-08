import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Typography = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent/Typography';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Frameworks - Bootstrap Utilities - Typography" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Typography;