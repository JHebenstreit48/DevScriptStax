import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InstallAndSetup = () => {
  const markdownFilePath = 'Languages/Dart/Basics/Fundamentals/InstallAndSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dart Fundamentals - Install & Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndSetup;
