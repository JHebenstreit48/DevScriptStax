import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityConsiderations = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Webhooks/SecurityConsiderations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Security Considerations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityConsiderations;
