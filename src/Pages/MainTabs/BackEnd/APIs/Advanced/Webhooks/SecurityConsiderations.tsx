import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SecurityConsiderations = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Webhooks/SecurityConsiderations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security Considerations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityConsiderations;
