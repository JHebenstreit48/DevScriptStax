import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
