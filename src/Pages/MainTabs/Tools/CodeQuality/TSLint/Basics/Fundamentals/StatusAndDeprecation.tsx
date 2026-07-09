import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
