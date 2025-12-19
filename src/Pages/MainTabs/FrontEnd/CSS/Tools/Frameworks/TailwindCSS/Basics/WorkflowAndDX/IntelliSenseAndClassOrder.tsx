import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntelliSenseAndClassOrder = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/WorkflowAndDX/IntelliSenseAndClassOrder';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IntelliSense & Class Order" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntelliSenseAndClassOrder;
