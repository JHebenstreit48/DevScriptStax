import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CompressionAndETag = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Performance/CompressionAndETag';

  return (
    <>
      <PageLayout>
        <PageTitle title="Compression & ETag" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CompressionAndETag;
