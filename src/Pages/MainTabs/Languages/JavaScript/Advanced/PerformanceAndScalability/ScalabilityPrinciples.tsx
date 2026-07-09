import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
