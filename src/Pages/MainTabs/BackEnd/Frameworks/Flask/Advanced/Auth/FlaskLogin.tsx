import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
