import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CORS = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Security/CORS';

  return (
    <>
      <PageLayout>
        <PageTitle title="CORS (Flask-CORS)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CORS;
