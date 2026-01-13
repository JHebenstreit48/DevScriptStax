import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Gunicorn = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Advanced/Deployment/Gunicorn';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Gunicorn" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Gunicorn;
