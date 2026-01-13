import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Compression = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Advanced/Performance/Compression';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Compression" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Compression;
