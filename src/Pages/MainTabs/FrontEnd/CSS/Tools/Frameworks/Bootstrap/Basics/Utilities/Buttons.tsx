import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Buttons = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/Buttons';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Bootstrap - Utilities - Buttons" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Buttons;