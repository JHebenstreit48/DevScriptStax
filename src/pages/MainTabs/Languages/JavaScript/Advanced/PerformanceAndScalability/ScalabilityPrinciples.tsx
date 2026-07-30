import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ScalabilityPrinciples = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/PerformanceAndScalability/ScalabilityPrinciples';

  return (
    <>
      <PageLayout>
        <PageTitle title="Scalability Principles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScalabilityPrinciples;
