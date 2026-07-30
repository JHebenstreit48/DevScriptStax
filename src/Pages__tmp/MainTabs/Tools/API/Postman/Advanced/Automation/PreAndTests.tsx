import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PreAndTests = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Automation/PreAndTests';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pre & Tests" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PreAndTests;
