import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Vercel = () => {
  const markdownFilePath = 'FrontEnd/NextJs/Advanced/Deployment/Vercel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Vercel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Vercel;
