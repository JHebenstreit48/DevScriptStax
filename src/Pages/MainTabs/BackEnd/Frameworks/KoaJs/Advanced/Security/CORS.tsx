import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CORS = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Security/CORS';

  return (
    <>
      <PageLayout>
        <PageTitle title="CORS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CORS;
