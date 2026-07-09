import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ModSecurity = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/SecurityAndHardening/ModSecurity';

  return (
    <>
      <PageLayout>
        <PageTitle title="ModSecurity (WAF)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModSecurity;
