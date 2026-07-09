import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
