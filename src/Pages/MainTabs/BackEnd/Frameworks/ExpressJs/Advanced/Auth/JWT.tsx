import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JWT = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Auth/JWT';

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
