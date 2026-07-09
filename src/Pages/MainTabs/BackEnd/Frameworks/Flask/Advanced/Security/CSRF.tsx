import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSRF = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Security/CSRF';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSRF (WTF-CSRF)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSRF;
