import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityAndAuthentication = () => {
  const markdownFilePath = 'Tools/CICDTools/Jenkins/Advanced/Security/SecurityAndAuthentication';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Security & Authentication" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityAndAuthentication;
