import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallAndSetup = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Fundamentals/InstallAndSetup';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Install & Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndSetup;
