import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Typography = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent/Typography';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Frameworks - Bootstrap Utilities - Typography" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Typography;