import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Gunicorn = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Advanced/Deployment/Gunicorn';

  return (
    <>
      <PageLayout>
        <PageTitle title="Gunicorn" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Gunicorn;
