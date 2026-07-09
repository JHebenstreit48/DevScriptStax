import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Compression = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Performance/Compression';

  return (
    <>
      <PageLayout>
        <PageTitle title="Compression" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Compression;
