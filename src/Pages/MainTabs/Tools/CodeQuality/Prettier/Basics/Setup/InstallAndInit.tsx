import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InstallAndInit = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Basics/Setup/InstallAndInit';

  return (
    <>
      <PageLayout>
        <PageTitle title="Install & Init" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndInit;
