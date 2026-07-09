import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ColorsAndOpacity = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/TypographyAndColor/ColorsAndOpacity';

  return (
    <>
      <PageLayout>
        <PageTitle title="Colors & Opacity" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColorsAndOpacity;
