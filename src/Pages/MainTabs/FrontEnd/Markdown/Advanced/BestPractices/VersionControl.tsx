import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VersionControl = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/BestPractices/VersionControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Version Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VersionControl;
