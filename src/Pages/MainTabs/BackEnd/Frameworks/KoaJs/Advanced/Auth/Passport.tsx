import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Passport = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Auth/Passport';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Passport (Koa)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Passport;
