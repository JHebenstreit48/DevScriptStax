import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InstallAndSetup = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/Fundamentals/InstallAndSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Express.js Fundamentals - Install & Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndSetup;
