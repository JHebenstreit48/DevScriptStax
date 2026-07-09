import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PassportJs = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Auth/PassportJs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Passport.js" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PassportJs;
