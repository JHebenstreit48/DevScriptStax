import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Passport = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Auth/Passport';

  return (
    <>
      <PageLayout>
        <PageTitle title="Passport (Koa)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Passport;
