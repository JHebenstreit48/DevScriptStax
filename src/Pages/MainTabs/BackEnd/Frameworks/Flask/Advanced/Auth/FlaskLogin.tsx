import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FlaskLogin = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Auth/FlaskLogin';

  return (
    <>
      <PageLayout>
        <PageTitle title="Flask-Login" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FlaskLogin;
