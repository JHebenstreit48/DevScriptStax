import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CustomModules = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/Modules/CustomModules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Custom Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomModules;
