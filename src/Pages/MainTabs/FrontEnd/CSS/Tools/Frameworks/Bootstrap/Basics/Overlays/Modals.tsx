import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Modals = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays/Modals';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Frameworks - Bootstrap - Modals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Modals;