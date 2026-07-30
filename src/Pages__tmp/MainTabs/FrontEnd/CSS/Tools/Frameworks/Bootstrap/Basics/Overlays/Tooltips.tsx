import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Tooltips = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays/Tooltips';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Frameworks - Bootstrap - Tooltips" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tooltips;