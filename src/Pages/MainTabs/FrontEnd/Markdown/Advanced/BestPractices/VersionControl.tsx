import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
