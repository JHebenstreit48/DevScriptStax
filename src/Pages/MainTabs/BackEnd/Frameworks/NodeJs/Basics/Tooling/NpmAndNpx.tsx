import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NpmAndNpx = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/Tooling/NpmAndNpx';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="npm & npx" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NpmAndNpx;
