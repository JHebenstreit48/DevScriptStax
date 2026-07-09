import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Accordions = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays/Accordions';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Frameworks - Bootstrap - Accordions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Accordions;