import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CompressionAndETag = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Performance/CompressionAndETag';

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
