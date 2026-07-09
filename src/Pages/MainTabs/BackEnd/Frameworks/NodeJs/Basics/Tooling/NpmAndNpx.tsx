import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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