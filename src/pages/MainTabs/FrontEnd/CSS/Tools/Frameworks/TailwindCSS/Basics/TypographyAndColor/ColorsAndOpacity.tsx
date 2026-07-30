import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
