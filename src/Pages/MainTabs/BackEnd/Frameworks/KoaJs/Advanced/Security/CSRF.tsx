import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CSRF = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Security/CSRF';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSRF (koa-csrf)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSRF;
