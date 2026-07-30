import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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