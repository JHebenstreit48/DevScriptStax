import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PopoverAndOverlayTrigger = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Overlays/PopoverAndOverlayTrigger';

  return (
    <>
      <PageLayout>
        <PageTitle title="Popover & OverlayTrigger" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PopoverAndOverlayTrigger;
