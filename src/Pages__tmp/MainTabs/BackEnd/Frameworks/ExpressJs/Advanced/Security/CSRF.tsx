import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CSRF = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Security/CSRF';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSRF (Cookies)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSRF;
