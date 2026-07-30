import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IntelliSenseAndClassOrder = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/WorkflowAndDX/IntelliSenseAndClassOrder';

  return (
    <>
      <PageLayout>
        <PageTitle title="IntelliSense & Class Order" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntelliSenseAndClassOrder;
