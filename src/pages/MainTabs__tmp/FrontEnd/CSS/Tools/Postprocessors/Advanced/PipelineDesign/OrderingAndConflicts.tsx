import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OrderingAndConflicts = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/Advanced/PipelineDesign/OrderingAndConflicts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ordering & Conflicts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OrderingAndConflicts;
