import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TypographyUtilities = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/TypographyAndColor/TypographyUtilities';

  return (
    <>
      <PageLayout>
        <PageTitle title="Typography Utilities" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypographyUtilities;
