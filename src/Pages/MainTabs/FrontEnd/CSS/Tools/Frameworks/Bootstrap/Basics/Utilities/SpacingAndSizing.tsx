import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpacingAndSizing = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/SpacingAndSizing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Frameworks - Bootstrap Utilities - Spacing and Sizing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpacingAndSizing;