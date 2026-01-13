import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CompressionAndETag = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Advanced/Performance/CompressionAndETag';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Compression & ETag" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CompressionAndETag;
