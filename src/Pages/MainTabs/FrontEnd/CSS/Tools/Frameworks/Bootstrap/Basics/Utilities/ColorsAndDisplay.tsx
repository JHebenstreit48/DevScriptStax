import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ColorsAndDisplay = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/ColorsAndDisplay';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Frameworks - Bootstrap Utilities - Colors and Display" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColorsAndDisplay;