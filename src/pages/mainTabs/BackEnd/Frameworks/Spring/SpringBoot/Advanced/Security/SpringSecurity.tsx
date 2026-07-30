import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SpringSecurity = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Security/SpringSecurity';

  return (
    <>
      <PageLayout>
        <PageTitle title="Spring Security" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpringSecurity;
