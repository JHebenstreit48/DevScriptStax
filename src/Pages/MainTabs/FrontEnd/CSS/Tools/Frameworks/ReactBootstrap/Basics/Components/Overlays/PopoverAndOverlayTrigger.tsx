import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
