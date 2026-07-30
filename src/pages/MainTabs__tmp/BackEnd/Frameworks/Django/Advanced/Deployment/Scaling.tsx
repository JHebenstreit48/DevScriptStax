import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Scaling = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Advanced/Deployment/Scaling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Scaling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Scaling;
