import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ModalAndTooltip = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Overlays/ModalAndTooltip';

  return (
    <>
      <PageLayout>
        <PageTitle title="Modal & Tooltip" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModalAndTooltip;
