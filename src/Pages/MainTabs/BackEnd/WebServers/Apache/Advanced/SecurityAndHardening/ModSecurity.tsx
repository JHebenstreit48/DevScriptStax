import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModSecurity = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/SecurityAndHardening/ModSecurity';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ModSecurity (WAF)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModSecurity;
