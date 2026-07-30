import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CorePrincipleS = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/Fundamentals/CorePrincipleS';

  return (
    <>
      <PageLayout>
        <PageTitle title="Core PrincipleS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CorePrincipleS;
