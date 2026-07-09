import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RetriesAndDLQs = () => {
  const markdownFilePath = 'CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/Architecture/RetriesAndDLQs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Retries & DLQs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RetriesAndDLQs;
