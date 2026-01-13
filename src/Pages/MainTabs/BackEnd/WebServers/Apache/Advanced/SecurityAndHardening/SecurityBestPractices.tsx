import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityBestPractices = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/SecurityAndHardening/SecurityBestPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Security Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityBestPractices;
