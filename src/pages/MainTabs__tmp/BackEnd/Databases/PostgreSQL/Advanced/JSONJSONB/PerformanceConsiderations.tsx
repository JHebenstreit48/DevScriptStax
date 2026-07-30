import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PerformanceConsiderations = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Advanced/JSONJSONB/PerformanceConsiderations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Performance Considerations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceConsiderations;
