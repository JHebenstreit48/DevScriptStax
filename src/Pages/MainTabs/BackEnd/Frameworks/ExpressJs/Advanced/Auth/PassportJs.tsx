import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PassportJs = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Auth/PassportJs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Passport.js" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PassportJs;
