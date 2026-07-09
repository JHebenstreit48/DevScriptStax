import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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