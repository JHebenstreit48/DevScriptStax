import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonModules = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/Modules/CommonModules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonModules;
