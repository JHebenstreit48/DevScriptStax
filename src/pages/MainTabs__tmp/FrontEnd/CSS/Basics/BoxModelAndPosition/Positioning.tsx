import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Positioning = () => {
  const markdownFilePath = 'FrontEnd/CSS/Basics/BoxModelAndPosition/Positioning';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Positioning" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Positioning;