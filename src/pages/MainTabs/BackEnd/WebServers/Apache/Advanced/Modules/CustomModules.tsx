import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomModules = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/Modules/CustomModules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomModules;
