import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NpmAndNpx = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Basics/Tooling/NpmNpx';

  return (
    <>
      <PageLayout>
        <PageTitle title="npm & npx" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NpmAndNpx;