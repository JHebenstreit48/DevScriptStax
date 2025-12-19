import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OrderingAndConflicts = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/PipelineDesign/OrderingAndConflicts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Ordering & Conflicts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OrderingAndConflicts;
