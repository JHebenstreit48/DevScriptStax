import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SpacingAndSizing = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/SpacingAndSizing';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Frameworks - Bootstrap Utilities - Spacing and Sizing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpacingAndSizing;