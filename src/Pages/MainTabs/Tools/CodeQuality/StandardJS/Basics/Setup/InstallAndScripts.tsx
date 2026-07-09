import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InstallAndScripts = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Basics/Setup/InstallAndScripts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Install & Scripts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndScripts;
