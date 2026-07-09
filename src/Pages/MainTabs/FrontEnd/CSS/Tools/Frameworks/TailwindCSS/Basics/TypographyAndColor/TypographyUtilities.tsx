import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
