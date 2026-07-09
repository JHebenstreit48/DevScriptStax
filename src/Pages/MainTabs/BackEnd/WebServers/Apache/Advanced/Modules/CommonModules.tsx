import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonModules = () => {
  const markdownFilePath = 'BackEnd/WebServers/Apache/Advanced/Modules/CommonModules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonModules;
