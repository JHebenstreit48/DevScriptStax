import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StatusAndDeprecation = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Basics/Fundamentals/StatusAndDeprecation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Status & Deprecation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StatusAndDeprecation;
