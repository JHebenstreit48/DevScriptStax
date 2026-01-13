import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Profiles = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/Config/Profiles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Profiles;
