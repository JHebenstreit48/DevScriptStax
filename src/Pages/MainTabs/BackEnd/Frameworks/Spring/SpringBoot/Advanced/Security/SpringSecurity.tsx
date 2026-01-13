import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpringSecurity = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Security/SpringSecurity';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Spring Security" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpringSecurity;
