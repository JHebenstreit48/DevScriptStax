import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JWT = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Auth/JWT';

  return (
    <>
      <PageLayout>
        <PageTitle title="JWT" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JWT;
