import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Coverage = () => {
  const markdownFilePath = 'Languages/Dart/Testing/QualityAndCI/Coverage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Coverage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Coverage;
