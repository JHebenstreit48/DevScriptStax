import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CSRF = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Security/CSRF';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSRF (koa-csrf)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CSRF;
