import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Config = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/Config';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Config (JavaConfig/XML)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Config;
